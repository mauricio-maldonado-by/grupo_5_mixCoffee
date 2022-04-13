-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mixcoffee5
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes_registrados`
--

DROP TABLE IF EXISTS `clientes_registrados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes_registrados` (
  `id` int NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes_registrados`
--

LOCK TABLES `clientes_registrados` WRITE;
/*!40000 ALTER TABLE `clientes_registrados` DISABLE KEYS */;
INSERT INTO `clientes_registrados` VALUES (1,'Leslie','Cullon','lcullon0@reference.com','HK8V3y','user','user_1.jpg'),(2,'Evelyn','Chesman','echesman1@people.com.cn','RnBE9WtwWj','user','user_2.jpg'),(3,'Virgie','Sterrie','vsterrie2@mit.edu','SS8rpGntoM','user','user_3.jpg'),(4,'Atalanta','Cornier','acornier3@go.com','bpxzXmDR','user','user_4.jpg'),(5,'Antoine','Batey','abatey4@elegantthemes.com','4fPFmZeJ','user','user_5.jpg'),(6,'Ruthe','O\'Lenane','rolenane5@netvibes.com','W6US0h55RL','user','user_6.jpg'),(7,'Sean','Satford','ssatford6@globo.com','phQfMTGJIEg0','user','user_7.jpg'),(8,'Dennie','Beckham','dbeckham7@de.vu','XwscT4t8i','user','user_8.jpg'),(9,'Teresa','Berrane','tberrane8@wordpress.org','Ta066IOfw5Hb','user','user_9.jpg'),(10,'Nedda','Moulder','nmoulder9@icq.com','N9bzO5pD9Xz','user','user_10.jpg'),(11,'Daron','Durnford','ddurnforda@soundcloud.com','GXwuEEBs','user','user_11.jpg'),(12,'Mignonne','Reisk','mreiskb@fda.gov','pNryDcWnoFv','user','user_12.jpg'),(13,'Dayle','Sipson','dsipsonc@g.co','YGk6Rhu8N','user','user_13.jpg'),(14,'Gregg','Touson','gtousond@github.io','O0vaHxTB','user','user_14.jpg'),(15,'Austen','Craythorn','acraythorne@google.de','X0kyNMY','user','user_15.jpg'),(16,'Allen','Peckitt','apeckittf@google.com.au','j8Sq5mHbmRc','user','user_16.jpg'),(17,'Myrna','Consterdine','mconsterdineg@pcworld.com','K8uA9V32S','user','user_17.jpg'),(18,'Fulton','Largan','flarganh@amazon.co.uk','yZhm8huvoF','user','user_18.jpg'),(19,'Natividad','Purkis','npurkisi@jigsy.com','vWW7AJwD0','user','user_19.jpg'),(20,'Merci','Tanser','mtanserj@over-blog.com','9Mia9TSIl','user','user_20.jpg');
/*!40000 ALTER TABLE `clientes_registrados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grains`
--

DROP TABLE IF EXISTS `grains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grains` (
  `grain_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `grainstock` tinyint NOT NULL,
  `price_per_unit` decimal(10,0) NOT NULL,
  `size_grain` char(1) NOT NULL,
  PRIMARY KEY (`grain_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table for grains information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grains`
--

LOCK TABLES `grains` WRITE;
/*!40000 ALTER TABLE `grains` DISABLE KEYS */;
/*!40000 ALTER TABLE `grains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemgrain`
--

DROP TABLE IF EXISTS `itemgrain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itemgrain` (
  `idItemGrain` int NOT NULL,
  `grain_id` int NOT NULL,
  `item_id` int NOT NULL,
  PRIMARY KEY (`idItemGrain`),
  KEY `grain_id_idx` (`grain_id`),
  KEY `item_id_idx` (`item_id`),
  CONSTRAINT `grain_id` FOREIGN KEY (`grain_id`) REFERENCES `grains` (`grain_id`),
  CONSTRAINT `item_id` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table to relate item and grain tables';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemgrain`
--

LOCK TABLES `itemgrain` WRITE;
/*!40000 ALTER TABLE `itemgrain` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemgrain` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `item_id` int NOT NULL,
  `member_id` int NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `net_sale` decimal(10,0) NOT NULL,
  `delivery` decimal(10,0) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table for products';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `token` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (2,'Evelyn','Chesman','echesman1@people.com.cn','RnBE9WtwWj','user','user_2.jpg',''),(3,'Virgie','Sterrie','vsterrie2@mit.edu','SS8rpGntoM','user','user_3.jpg',''),(4,'Atalanta','Cornier','acornier3@go.com','bpxzXmDR','user','user_4.jpg',''),(5,'Antoine','Batey','abatey4@elegantthemes.com','4fPFmZeJ','user','user_5.jpg',''),(6,'Ruthe','O\'Lenane','rolenane5@netvibes.com','W6US0h55RL','user','user_6.jpg',''),(7,'Sean','Satford','ssatford6@globo.com','phQfMTGJIEg0','user','user_7.jpg',''),(8,'Dennie','Beckham','dbeckham7@de.vu','XwscT4t8i','user','user_8.jpg',''),(9,'Teresa','Berrane','tberrane8@wordpress.org','Ta066IOfw5Hb','user','user_9.jpg',''),(10,'Nedda','Moulder','nmoulder9@icq.com','N9bzO5pD9Xz','user','user_10.jpg',''),(11,'Daron','Durnford','ddurnforda@soundcloud.com','GXwuEEBs','user','user_11.jpg',''),(12,'Mignonne','Reisk','mreiskb@fda.gov','pNryDcWnoFv','user','user_12.jpg',''),(13,'Dayle','Sipson','dsipsonc@g.co','YGk6Rhu8N','user','user_13.jpg',''),(14,'Gregg','Touson','gtousond@github.io','O0vaHxTB','user','user_14.jpg',''),(15,'Austen','Craythorn','acraythorne@google.de','X0kyNMY','user','user_15.jpg',''),(16,'Allen','Peckitt','apeckittf@google.com.au','j8Sq5mHbmRc','user','user_16.jpg',''),(17,'Myrna','Consterdine','mconsterdineg@pcworld.com','K8uA9V32S','user','user_17.jpg',''),(18,'Fulton','Largan','flarganh@amazon.co.uk','yZhm8huvoF','user','user_18.jpg',''),(19,'Natividad','Purkis','npurkisi@jigsy.com','vWW7AJwD0','user','user_19.jpg',''),(20,'Merci','Tanser','mtanserj@over-blog.com','9Mia9TSIl','user','user_20.jpg','');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducts` int NOT NULL,
  `memberid` int NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `netsale` decimal(10,0) NOT NULL,
  `delivery` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idproducts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table for the products';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,1,20,200,1),(4,2,10,100,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 19:08:04
