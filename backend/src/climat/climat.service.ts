import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClimatDto } from './dto/create-climat.dto';
import { Climat, ClimatDocument } from './entities/climat.entity';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ClimatService {
  private port: SerialPort;
  private parser: ReadlineParser;

  constructor(@InjectModel(Climat.name) private ClimatSchema: Model<ClimatDocument>) {
    this.port = new SerialPort({path:'/dev/ttyACM0', baudRate: 9600 });
    this.parser = this.port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
  }

  async onApplicationBootstrap() {
    await this.saveSensorData();
  }

  async getSensorData(): Promise<{ temperature: number; humidityA: number; humidityS:number; luminosity: number }> {
    return new Promise<{ temperature: number; humidityA: number, humidityS:number; luminosity: number }>(
      (resolve) => {
        this.parser.on('data', async (data) => {
          const values = data.split('/'); console.log(values);
          const temperature = parseFloat(values[0]); console.log(temperature);
          const humidityA = parseFloat(values[1]); console.log(humidityA);
          const humidityS = parseFloat(values[2]); console.log(humidityS);
          const luminosity = parseFloat(values[3]); console.log(luminosity);
            const now = new Date();
            // les heures de sauvegarde souhaitées
            const saveTimes = [
              { hour: 12, minute: 20, second: 0 },
              { hour: 18, minute: 50, second: 0 },
            ];
        for(const saveTime of saveTimes) {
          if(now.getHours() === saveTime.hour && now.getMinutes() === saveTime.minute && now.getSeconds() === saveTime.second) {
            if (!isNaN(temperature) && !isNaN(humidityA) && !isNaN(humidityS) && !isNaN(luminosity)) {
              const sensorData = new this.ClimatSchema({ temperature, humidityA, humidityS, luminosity });
              await sensorData.save();
              resolve({ temperature, humidityA, humidityS, luminosity });
            } 
          }
        }
        });
      },
    );
  }

  @Cron('0 * * * *')
  async saveSensorData() {
    const data = await this.getSensorData();
    console.log(`Saved data: ${JSON.stringify(data)}`);
  }

  create(createClimatDto: CreateClimatDto) {
    const createdClimat = new this.ClimatSchema(createClimatDto);
    return createdClimat.save();
  }

  findAll() {
    return this.ClimatSchema.find().exec();
  }

  findOne(id: string) {
    return this.ClimatSchema.findById(id).exec();
  }

}
