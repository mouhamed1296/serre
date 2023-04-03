#include "DHT.h"
#include <Keypad.h>
#include <SPI.h>
#include <MFRC522.h>
 
//Déclaration des PINS
#define SS_PIN 53
#define RST_PIN 5 
#define DHTTYPE DHT11  
#define DHTPIN 23
#define PRPIN A1
#define solPIN A2
#define MOTORPIN 22
#define POMPEPIN 24
#define SERVOPIN 10

//Déclaration des variable
boolean relayState = true; // permet de controller la pompe
boolean motorState = false; // permet de controller le moteur qui ouvre le toit
boolean fanState = false; // permet de connaitre l'etat de l'extracteur d'air
const byte ROWS= 4; //nombre de ligne du keypad
const byte COLS= 4; //nombre de colonne du keypad

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
const char secretCode[] = "1234"; // definition du mot de passe
const int maxAttempts = 4; // definition du nombre maximum de tentatives
int attempts = 0; // initialisation du nombre de tentatives à zero

DHT dht(DHTPIN, DHTTYPE);
Keypad keypad = Keypad(makeKeymap(keymap), rowPins, colPins, ROWS, COLS);
MFRC522 mfrc522(SS_PIN, RST_PIN);


void setup() {
  // Initialise des capteurs et du port série
  Serial.begin(9600);   
  dht.begin();
  SPI.begin();      // Initialise  SPI bus
  mfrc522.PCD_Init();   // Initialise MFRC522

  pinMode(PRPIN, INPUT);
  pinMode(solPIN, INPUT);
  pinMode(POMPEPIN, OUTPUT);
  pinMode(MOTORPIN, OUTPUT);

  digitalWrite(POMPEPIN, 1);
}

void loop() {
  //Récupération des données fournies par les capteurs
  char key = keypad.getKey();
  int temp = dht.readTemperature();
  int hum = dht.readHumidity();
  int valueSol = analogRead(solPIN);
  unsigned int valuePR = analogRead(PRPIN);
  String rfid = "";

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

  if (key) { // Vérifie si une touche a été pressé
    Serial.print("Key pressed: ");
    Serial.println(key);
    if (key == '#') { // si # est la touche pressé l'utilisateur peut entrer son code
      if (attempts >= maxAttempts) { // Si le maximum de tentative est atteint
        Serial.println("Maximum de tentatives atteint réessayer dans 2 secondes.");
        delay(2000);
        attempts = 0; //reset du nombre de tentatives
      } else {
        char enteredCode[5] = ""; // initialise le mot de passe entré en un chaine vide
        int i = 0;
        while (i < 4) { // Autorise l'utilisateur à entrer 4 caractère
          char key = keypad.getKey();
          if (key) {
            enteredCode[i++] = key;
            Serial.print(key);
            delay(100);
          }
        }
        Serial.println();
        if (strcmp(enteredCode, secretCode) == 0) { // Si le mot de passe entré est correct
          delay(2000);
          attempts = 0; // reset du nombre de tentatives
        } else { // Si le code entré est incorrect
          Serial.println("Access refusé. Réessayer SVP.");
          delay(2000);
          attempts++; // incrémenter le nombre de tentatives
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
      //digitalWrite(POMPEPIN, relayState ? HIGH : LOW); // on ou off la pompe en se basant sur la valeur boolen
    } else if (isAlpha(data)) {
      motorState = (data == 'o') ? true : false; // convertir la chaine en booolen
      //digitalWrite(MOTORPIN, motorState ? HIGH : LOW); // on ou off le moteur qui gère le toit en se basant sur la valeur boolen
    }
  } else {
    //Arrosage automatique
    //relayState = valueSol > 100 ? false : true;
    // Ouverture du toit automatique
    //motorState = valuePR > 100 ? false : true;
  }
   
  digitalWrite(POMPEPIN, relayState ? HIGH : LOW); // on ou off la pompe en se basant sur la valeur boolen
  digitalWrite(MOTORPIN, motorState ? HIGH : LOW); // on ou off le moteur qui gère le toit en se basant sur la valeur boolen
/* Réception des commandes envoyés depuis l'app Fin */

  fanState = temp > 30 ? true : false;// Etat de l'extracteur d'air

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
  Serial.println(rfid);

  /* Envoie des donnés à travers le serial port FIN*/

  delay(1000);
}
