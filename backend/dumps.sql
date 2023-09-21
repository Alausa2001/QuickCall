-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: quickcall_db
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `LGAs`
--

DROP TABLE IF EXISTS `LGAs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LGAs` (
  `LGAId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `LGAName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `stateId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`LGAId`),
  UNIQUE KEY `LGAId` (`LGAId`),
  KEY `stateId` (`stateId`),
  CONSTRAINT `LGAs_ibfk_1` FOREIGN KEY (`stateId`) REFERENCES `states` (`stateId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LGAs`
--

LOCK TABLES `LGAs` WRITE;
/*!40000 ALTER TABLE `LGAs` DISABLE KEYS */;
INSERT INTO `LGAs` VALUES ('385e0b3b-b7d6-4223-91da-4000a22019b8','oluyole','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('39eedf0a-a958-4df2-adef-f7e3c3117cea','ibadan south-west','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('5f1beb5a-68e2-4d5c-8911-ff0c181a2195','ibadan north','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','ibadan north-east','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('91cb02ec-95d9-4fec-9f1b-685aee117ee9','egbeda','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('9ced2eef-0cd6-4092-9308-ed46cc48b5d3','ibadan north-west','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('c479c659-1ec1-4f34-a319-a318842c6374','lagelu','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('d9928be7-bbf2-4a05-b829-c7bb2bf84134','ona-ara','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('dd54e8b9-ee2d-49a9-a25a-6e7799b94562','ido','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7'),('f5f66164-c301-4677-ab53-c265adf40392','ibadan south-east','2023-09-20 16:58:29','2023-09-20 16:58:29','c345d2c7-34ef-430c-89c4-e5c5005fcda7');
/*!40000 ALTER TABLE `LGAs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `AdminId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`AdminId`),
  UNIQUE KEY `AdminId` (`AdminId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('cbcde362-93cd-4935-ac56-5cd6a997b3d8','$2b$10$yfHGrnPbnI77huUxalSApeyJheGxz/oXiJjXew5AuCQENMTyXl9B.','Quickcall','2023-09-20 16:54:01','2023-09-20 16:54:01');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emergency_contacts`
--

DROP TABLE IF EXISTS `emergency_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emergency_contacts` (
  `contactId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `emergencyType` varchar(50) NOT NULL,
  `whatsappContact` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `LGAId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `emergencyNo` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`contactId`),
  UNIQUE KEY `contactId` (`contactId`),
  KEY `LGAId` (`LGAId`),
  CONSTRAINT `emergency_contacts_ibfk_1` FOREIGN KEY (`LGAId`) REFERENCES `LGAs` (`LGAId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emergency_contacts`
--

LOCK TABLES `emergency_contacts` WRITE;
/*!40000 ALTER TABLE `emergency_contacts` DISABLE KEYS */;
INSERT INTO `emergency_contacts` VALUES ('20ace08a-4fe0-42c4-ad40-c9baff5e2fd2','fire','08160960769','2023-09-20 17:09:20','2023-09-20 17:09:20','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','08160969769'),('2538a6db-8f9d-490b-8cf7-73ee214b91b7','fire','08160960769','2023-09-20 17:05:54','2023-09-20 17:05:54','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','08160969769'),('25bf4a42-4c99-4a11-94a8-0d81c07b55eb','police','08160960769','2023-09-20 17:04:38','2023-09-20 17:04:38','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','08160969769'),('33c7fdd8-2314-4784-aa47-ab0ca297703f','fire','08160960769','2023-09-20 17:17:53','2023-09-20 17:17:53','5f1beb5a-68e2-4d5c-8911-ff0c181a2195','08160969769'),('43c20836-0f98-44e7-99a5-19de6d0fa182','police','08160960769','2023-09-20 17:19:43','2023-09-20 17:19:43','5f1beb5a-68e2-4d5c-8911-ff0c181a2195','08160969769'),('44d39ef4-7c76-4efb-b53b-668065704d0e','medical','08160960769','2023-09-20 17:03:09','2023-09-20 17:03:09','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','08160969769'),('dc61c49d-33e7-4836-b429-2727b678c422','fire','08160960769','2023-09-20 17:08:34','2023-09-20 17:08:34','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','08160969769'),('e78476c4-aa21-4bf4-ba9d-10eb6268722a','medical','08160960769','2023-09-20 17:18:54','2023-09-20 17:18:54','5f1beb5a-68e2-4d5c-8911-ff0c181a2195','08160969769'),('ee6c792c-644d-42b7-a0f1-7d30efd1a6a6','fire','08160960769','2023-09-20 17:16:30','2023-09-20 17:16:30','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4','08160969769');
/*!40000 ALTER TABLE `emergency_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emergency_tips`
--

DROP TABLE IF EXISTS `emergency_tips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emergency_tips` (
  `tipId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `category` varchar(50) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`tipId`),
  UNIQUE KEY `tipId` (`tipId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emergency_tips`
--

LOCK TABLES `emergency_tips` WRITE;
/*!40000 ALTER TABLE `emergency_tips` DISABLE KEYS */;
INSERT INTO `emergency_tips` VALUES ('4748fa48-1519-434c-ab10-1a0622d42a04','police','Police Tip 1','Description of police tip 1.','2023-09-20 16:54:04','2023-09-20 16:54:04'),('5f9198b2-affa-49db-b0c2-7a3e1ad31773','medical','Medical Tip 1','Description of medical tip 1.','2023-09-20 16:54:04','2023-09-20 16:54:04'),('f669401e-a8ab-496e-afc7-da49190a3216','fire','Fire Safety Tip 1','Description of fire safety tip 1.','2023-09-20 16:54:04','2023-09-20 16:54:04');
/*!40000 ALTER TABLE `emergency_tips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedbacks`
--

DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks` (
  `feedbackId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(50) NOT NULL,
  `emergencyType` varchar(50) NOT NULL,
  `comment` text,
  `emergencyContact` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`feedbackId`),
  UNIQUE KEY `feedbackId` (`feedbackId`),
  KEY `userId` (`userId`),
  CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks`
--

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;
INSERT INTO `feedbacks` VALUES ('6d1ee30a-9ad2-4be2-8f81-9e6e3cbaeccf','Quickcall','Medical','The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app','09999','2023-09-20 16:41:43','2023-09-20 16:41:43','c11353f5-f004-4d43-9424-567920512482');
/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_info`
--

DROP TABLE IF EXISTS `medical_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_info` (
  `medicalId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `bloodType` varchar(5) DEFAULT NULL,
  `genotype` varchar(5) DEFAULT NULL,
  `allergies` json DEFAULT NULL,
  `chronicConditions` json DEFAULT NULL,
  `famDocContact` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`medicalId`),
  UNIQUE KEY `medicalId` (`medicalId`),
  KEY `userId` (`userId`),
  CONSTRAINT `medical_info_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_info`
--

LOCK TABLES `medical_info` WRITE;
/*!40000 ALTER TABLE `medical_info` DISABLE KEYS */;
INSERT INTO `medical_info` VALUES ('b29b4e0b-1c02-4e06-aef6-ac2e6c609e8f','A+','AS','[\"dust\", \"pollen\"]','[\"diabetes\", \"hypertension\", \"asthma\"]','020200000','2023-09-20 16:45:26','2023-09-20 16:45:27','c11353f5-f004-4d43-9424-567920512482');
/*!40000 ALTER TABLE `medical_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notable_people`
--

DROP TABLE IF EXISTS `notable_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notable_people` (
  `notableId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `position` varchar(255) NOT NULL,
  `personName` varchar(255) NOT NULL,
  `phoneNo` varchar(15) DEFAULT NULL,
  `whatsappContact` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `LGAId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`notableId`),
  UNIQUE KEY `notableId` (`notableId`),
  KEY `LGAId` (`LGAId`),
  CONSTRAINT `notable_people_ibfk_1` FOREIGN KEY (`LGAId`) REFERENCES `LGAs` (`LGAId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notable_people`
--

LOCK TABLES `notable_people` WRITE;
/*!40000 ALTER TABLE `notable_people` DISABLE KEYS */;
INSERT INTO `notable_people` VALUES ('301170e9-4e28-45a4-a6ee-0fafca4753c9','D.P.O, agodi station','Wales Rodique','08160969769','08160969769','2023-09-20 17:04:38','2023-09-20 17:04:38','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4'),('41eb8f99-25f5-49f7-a888-b73244380d0e','D.P.O','Pales Sodique','08160969769','08160969769','2023-09-20 17:19:47','2023-09-20 17:19:47','5f1beb5a-68e2-4d5c-8911-ff0c181a2195'),('62e531a9-59b5-4410-a18b-e79d425bc61b','Chief fire fighter','Pales Sodique','08160969769','08160969769','2023-09-20 17:08:34','2023-09-20 17:08:34','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4'),('8b7355d0-05b8-4efd-8e61-5e5ffd705831','Chief fire fighter','Pales Sodique','08160969769','08160969769','2023-09-20 17:16:31','2023-09-20 17:16:31','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4'),('8fc5dcc6-1906-4ed3-ab29-fcd2ecf7621b','Chief fire fighter','Pales Sodique','08160969769','08160969769','2023-09-20 17:17:53','2023-09-20 17:17:53','5f1beb5a-68e2-4d5c-8911-ff0c181a2195'),('a8395a7c-0515-44d1-9db5-d237d676d1fc','Chief medical director','Pales Sodique','08160969769','08160969769','2023-09-20 17:18:55','2023-09-20 17:18:55','5f1beb5a-68e2-4d5c-8911-ff0c181a2195'),('c30ebb16-6426-405c-b999-417bf1754cf8','Chief Medical Director, John Hopkins','Khidr Rodiyah','08160969769','08160969769','2023-09-20 17:03:10','2023-09-20 17:03:10','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4'),('ecb31c07-7128-41d9-addb-8226db87b38a','Chief fire fighter','Pales Sodique','08160969769','08160969769','2023-09-20 17:05:54','2023-09-20 17:05:54','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4'),('f4ae71ec-ee3f-426b-be87-8371e8915311','Chief fire fighter','Pales Sodique','08160969769','08160969769','2023-09-20 17:09:21','2023-09-20 17:09:21','8d05ebbe-9138-4e1d-b990-fa8c908f2cb4');
/*!40000 ALTER TABLE `notable_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `stateId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `stateName` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`stateId`),
  UNIQUE KEY `stateId` (`stateId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES ('8f5ab9ac-f3bf-440d-8ef1-258ac0274c06','ogun','2023-09-20 16:54:02','2023-09-20 16:54:02'),('93462f85-39c0-4285-afd1-15c89f2378db','lagos','2023-09-20 16:54:02','2023-09-20 16:54:02'),('ba85426a-3ae8-4b22-9ea9-e2cbac6b32ff','anambra','2023-09-20 16:54:02','2023-09-20 16:54:02'),('c345d2c7-34ef-430c-89c4-e5c5005fcda7','oyo','2023-09-20 16:54:02','2023-09-20 16:54:02');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `firstName` varchar(36) DEFAULT NULL,
  `lastName` varchar(36) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(36) NOT NULL,
  `phoneNo1` varchar(15) DEFAULT NULL,
  `phoneNo2` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `age` varchar(5) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `nameOfEmerContact` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `emergencyPhoneNo` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('3d069c5e-f880-4f5f-b741-d34e49a706a5',NULL,NULL,NULL,'$2b$10$0fXwwh/.CZOxfKipDSZgE.8Ughpf5DVP7hY3nivba5CnY/1UK3hZW','Testing',NULL,NULL,'2023-09-19 02:58:59','2023-09-19 02:58:59',NULL,NULL,NULL,NULL,NULL),('4e733110-32c0-43b3-8da3-545c8d48fcc0',NULL,NULL,NULL,'$2b$10$cHmO6aQpkbUoQgfodOh3Q.cbteiW1AGcBQ5YfdKlsTShCVYzGuXjG','Testing ',NULL,NULL,'2023-09-19 02:51:16','2023-09-19 02:51:16',NULL,NULL,NULL,NULL,NULL),('66ece5a2-3638-4f2f-b0fd-d7c969255a9b',NULL,NULL,NULL,'$2b$10$7y7zYSf75p8NtYKK.uf39OxyaT88jCbyA7Au.4Ib8bWQHaKwdjojy','Testing3',NULL,NULL,'2023-09-19 03:08:13','2023-09-19 03:08:13',NULL,NULL,NULL,NULL,NULL),('c11353f5-f004-4d43-9424-567920512482','Walex','Adenuga','oluwaferanmialausa2001@gmail.com','$2b$10$ladc45q56NujdCllp6z2QevBpBJcW24dTH.EPswxGb8oSn5KFGZ5W','Quickcall','08160969769','07019302484','2023-09-20 16:40:25','2023-09-20 16:45:28','44','male','badaru basirah','wifey','0909xxxxxxx'),('f835709e-a6e8-4e63-bb38-dcba67a2dfd7','Adam','Olanrewaju','olanrewajuadam2020@gmail.com','$2b$10$tQnQoxppekTGt/XE3BWG7.tPko9No4QeS6Yv9U98jYus3S6g6Yioi','Dharmzeey','09035877851','09035877851','2023-09-11 00:33:13','2023-09-11 00:33:13',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-21 16:42:31
