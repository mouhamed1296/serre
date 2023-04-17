#include "DHT.h"
#include <Keypad.h>
#include <SPI.h>
#include <MFRC522.h>
#include "LiquidCrystal_I2C.h"
#include <Servo.h>
//#include <Stepper.h>

Servo myservo;

LiquidCrystal_I2C lcd(0x27,16,2); // définit le type d'écran lcd 16 x 2
 

//Déclaration des PINS
#define SS_PIN 53
#define RST_PIN 5 
#define DHTTYPE DHT11  
#define DHTPIN 23
#define PRPIN A4
#define solPIN A2
#define MOTORPIN 22
#define POMPEPIN 24
#define SERVOPIN 10
#define FANPIN 30
#define trigPin 44
#define echoPin 46
#define buzzerPin 48

//Déclaration des variable
boolean relayState = true; // permet de controller la pompe
boolean motorState = false; // permet de controller le moteur qui ouvre le toit
boolean fanState = false; // permet de connaitre l'etat de l'extracteur d'air
const byte ROWS= 4; //nombre de ligne du keypad
const byte COLS= 4; //nombre de colonne du keypad
const int stepsPerRevolution = 2048; // Définit le nombre de pas par rotation:
int maxi = 1023;
int mini = 0;
int valueSol;

//Représentation du keypad
char keymap[ROWS][COLS]=
{
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte rowPins[ROWS] = {9,8,7,6}; //PINS pour les ligne
byte colPins[COLS] = {5,4,3,2}; //PINS pour les colonnes
/*const char secretCode[] = "1234"; // definition du mot de passe
const int maxAttempts = 4; // definition du nombre maximum de tentatives
int attempts = 0; // initialisation du nombre de tentatives à zero*/

const int CORRECT_CODE = 1234; // the correct access code
const int MAX_ATTEMPTS = 3; // maximum number of attempts allowed
int numAttempts = 0; // current number of attempts

DHT dht(DHTPIN, DHTTYPE);
Keypad keypad = Keypad(makeKeymap(keymap), rowPins, colPins, ROWS, COLS);
MFRC522 mfrc522(SS_PIN, RST_PIN);
//Stepper myStepper = Stepper ( stepsPerRevolution, 8, 10, 9, 11 ) ;
float duration, distancecm;


void setup() {
  // Initialise des capteurs et du port série
  Serial.begin(9600);   
  dht.begin();
  SPI.begin();      // Initialise  SPI bus
  mfrc522.PCD_Init();   // Initialise MFRC522
  
  //myStepper.setSpeed ( 5 ) ;

  /*lcd.init(); // initialize the LCD
  lcd.backlight(); // turn on the backlight
  lcd.display();
  lcd.setCursor(0,0);
  lcd.print("Appuie #:");*/

  pinMode(PRPIN, INPUT);
  pinMode(solPIN, INPUT);
  pinMode(POMPEPIN, OUTPUT);
  pinMode(MOTORPIN, OUTPUT);
  pinMode(11, OUTPUT);
  digitalWrite(POMPEPIN, 1);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  digitalWrite(trigPin, LOW);
  myservo.attach(SERVOPIN);
  myservo.write(0);
}

void loop() {

  //Récupération des données fournies par les capteurs
  /*char key = keypad.getKey();*/
  int temp = dht.readTemperature();
  int hum = dht.readHumidity();
  unsigned int valuePR = analogRead(PRPIN);
  valueSol = map(solPIN, mini, maxi, 0, 100);
  String rfid = "";
  digitalWrite(trigPin, LOW);
  delay(5);
  digitalWrite(trigPin, HIGH);
  delay(10);
  digitalWrite(trigPin, LOW);

  //duration (in microseconds) it takes for the sound wave to be sent from sensor to object and return
  duration = pulseIn(echoPin, HIGH, 25000UL);
 
  // Convert the travel time of sound into distance, distance = time x speed of sound
  distancecm = (duration/2) / 29.1;     //  or multiply (duration/2) by 0.0343 
  if (distancecm < 5) {
    digitalWrite(buzzerPin, HIGH);
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  /*Serial.print(distancecm);
  Serial.print("/");*/

/* Gestion de la carte RFID Début*/

  /*if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }*/

  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {

    String content= "";
    byte letter;

    for (byte i = 0; i < mfrc522.uid.size; i++) 
    {
      content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
      content.concat(String(mfrc522.uid.uidByte[i], HEX));
    }
    
    content.toUpperCase();
    rfid = content.substring(1);
  }

  /*Gestion de la carte rfid FIN*/

  /*Gestion de l'acces avec le KEYPAD Début*/

  /*static bool waitingForCode = true; // flag indicating whether to wait for the access code or not
  static char code[5]; // stores the entered code
  static int codeIndex = 0; // the current index in the code array
  boolean isCorrect = false;
  
  if (waitingForCode) {
    char key = keypad.getKey(); // read the keypad
    
    if (key == '#') { // if the '#' key is pressed
      waitingForCode = false; // set the flag to indicate that the access code is being entered
      lcd.clear(); // clear the LCD
      lcd.setCursor(0, 0); // set the cursor to the first column of the first row
      lcd.print("Entrer Code:"); // print initial message on LCD
    }
  }
  else {
    while(numAttempts < 3 && !isCorrect) {
      char key = keypad.getKey(); // read the keypad
    
      if (key != NO_KEY && codeIndex < 4) { // if a key is pressed and the code is not complete
        lcd.print("*"); // print a '*' on the LCD
        code[codeIndex] = key; // add the key to the code array
        codeIndex++; // move to the next index
      }
      
      if (codeIndex == 4) { // if the code is complete
        int enteredCode = atoi(code); // convert the code to an integer
        codeIndex = 0; // reset the code index
        lcd.clear(); // clear the LCD
        
        if (enteredCode == CORRECT_CODE) { // if the correct code is entered
          lcd.print("Acces Autorise"); // print message on LCD
          myservo.write(90);
          delay(300);
          myservo.write(180);
          delay(300);
          myservo.write(0);
          delay(300);
          delay(2000); // wait for 2 seconds
          lcd.clear(); // clear the LCD
          lcd.setCursor(0, 0); // set the cursor to the first column of the first row
          lcd.print("Appuie #:"); // print message on LCD
          numAttempts = 0; // reset number of attempts
          break;
        }
        else {
          numAttempts++; // increment number of attempts
          
          if (numAttempts >= MAX_ATTEMPTS) { // if
            lcd.print("Acces Refuse"); // print message on LCD
            delay(2000); // wait for 2 seconds
            lcd.clear(); // clear the LCD
            lcd.setCursor(0, 0); // set the cursor to the first column of the first row
            lcd.print("Tentative Epuise"); // print message on LCD
            delay(2000); // wait for 2 seconds
            lcd.clear(); // clear the LCD
            lcd.setCursor(0, 0); // set the cursor to the first column of the first row
            lcd.print("Appuie #:"); // print message on LCD
            numAttempts = 0; // reset number of attempts
            break;
          }
          else { // if the number of attempts is less than the maximum
            lcd.print("Acces Refuse"); // print message on LCD
            delay(2000); // wait for 2 seconds
            lcd.clear(); // clear the LCD
            lcd.setCursor(0, 0); // set the cursor to the first column of the first row
            lcd.print("Entrer Code:"); // print message on LCD
          }
        }
      }
    }
  }
  /*Gestion de l'acces avec le KEYPAD FIN*/

/* Réception des commandes envoyés depuis l'app Début */

  if (Serial.available() > 0) { //Vérifier si des données sont disponible au niveau du serial port
    char data = Serial.read(); // Lecture des données entrant
    // Si la donnée entrante est un nombre elle concerne la pompe
    // sinon si c'est un caractère elle concerne le moteur qui gère le toit
    if (isdigit(data)) {
      relayState = (data == '0') ? true : false; // convertir le nombre en booolen
      digitalWrite(POMPEPIN, relayState ? HIGH : LOW); // on ou off la pompe en se basant sur la valeur boolen
    } else if (isAlpha(data)) {
      motorState = (data == 'o') ? true : false; // convertir la chaine en booolen
      digitalWrite(MOTORPIN, motorState ? HIGH : LOW); // on ou off le moteur qui gère le toit en se basant sur la valeur boolen
       myservo.write(motorState ? 90 : -90);
      /*if (motorState) {
        myStepper.step(stepsPerRevolution);
      } else {
        myStepper.step(-stepsPerRevolution);
      }*/
    }
  } /*else {
    //Arrosage automatique
    //relayState = valueSol > 100 ? false : true;
    // Ouverture du toit automatique
    //motorState = valuePR > 100 ? false : true;
 // }*/
   
  //digitalWrite(POMPEPIN, relayState ? HIGH : LOW); // on ou off la pompe en se basant sur la valeur boolen
  //digitalWrite(MOTORPIN, motorState ? HIGH : LOW); // on ou off le moteur qui gère le toit en se basant sur la valeur boolen
/* Réception des commandes envoyés depuis l'app Fin */
  int autoStart = false; 
  if (valuePR < 30 && !motorState) {
    autoStart = true;
    myservo.write(90);
  } else {
    autoStart = false;
    myservo.write(-90);
  }

  fanState = temp > 30 ? true : false;// Etat de l'extracteur d'air
  if (valuePR < 30 ) {
    motorState = autoStart;
  }
   digitalWrite(11, !fanState);

/* Envoie des donnés à travers le serial port Début*/

  Serial.print(temp);  
  Serial.print("/");  
  Serial.print(hum);  
  Serial.print("/");  
  Serial.print(valueSol); 
  Serial.print("/");  
  Serial.print(valuePR);
  Serial.print("/");
  Serial.print(!relayState);
  Serial.print("/");
  Serial.print(motorState);
  Serial.print("/");
  Serial.print(fanState);
  Serial.print("/");
  Serial.print(rfid);
  Serial.print("/");
  Serial.println(autoStart);
  /* Envoie des donnés à travers le serial port FIN*/

  delay(1000);
}
