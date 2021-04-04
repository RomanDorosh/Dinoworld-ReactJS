-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-04-2021 a las 19:27:52
-- Versión del servidor: 8.0.23-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dinodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `continent`
--

CREATE TABLE `continent` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `continent`
--

INSERT INTO `continent` (`id`, `name`) VALUES
(1, 'South America'),
(2, 'North America'),
(3, 'Europe'),
(4, 'Asia'),
(5, 'Africa'),
(6, 'Australia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diet`
--

CREATE TABLE `diet` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `diet`
--

INSERT INTO `diet` (`id`, `name`) VALUES
(1, 'Carnivore'),
(2, 'Herbivore'),
(3, 'Piscivore');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dinosaur`
--

CREATE TABLE `dinosaur` (
  `id` int NOT NULL,
  `period_id` int NOT NULL,
  `diet_id` int NOT NULL,
  `continent_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int NOT NULL,
  `height` double NOT NULL,
  `lenght` int NOT NULL,
  `top_speed` int NOT NULL,
  `top` tinyint(1) NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `dinosaur`
--

INSERT INTO `dinosaur` (`id`, `period_id`, `diet_id`, `continent_id`, `name`, `weight`, `height`, `lenght`, `top_speed`, `top`, `img`, `info`) VALUES
(1, 2, 2, 2, 'Stegosaurus', 7000, 5, 9, 8, 1, 'stegosaurus.jpg', 'A large, slow moving plant-eater, Stegosaurus would have defended itself from predators like Allosaurus and Ceratosaurus with its powerful spiked tail. The bony plates along its back were embedded in the skin of the animal, not attached to its skeleton, which is why in most fossil finds the plates are separated from the body. When O C Marsh described the first fossil of a Stegosaurus, he concluded that the plates would have lain flat on its back. After finding a specimen that had been covered with mud, which had held the plates in place, Marsh realised that they stood vertically, alternately on either side of the spine. Scientists are not exactly sure what the plates were used for. They may have warned off predators, or allowed members of the same species to recognise each other. Another suggestion is that the plates were used to regulate body temperature.There are tiny grooves in the plate surfaces, possibly where blood vessels would have been. The amount of blood passing through these vessels would determine the amount of heat transfer.Compared with the rest of its body, Stegosaurus had a small head and its brain was around the size of a plum!'),
(3, 2, 2, 2, 'Ankylosaurus', 5000, 1.6, 6, 10, 1, 'ankylosaurus.jpg', 'It is something of a paradox that one of the most popular dinosaurs of all time is understood by some of the most incomplete fossil remains.‭ ‬What can be gleaned from the available fossil material is that Ankylosaurus was one of if not the largest of the group.‭ ‬The incomplete fossil evidence however has meant that determining the exact size of Ankylosaurus is problematic and will remain so until further,‭ ‬more complete Ankylosaurus remains are discovered.\r\n       As a low browser,‭ ‬Ankylosaurus’s mouth was shaped for cropping vegetation with an arrangement of leaf shaped shearing teeth behind.‭ ‬One thing worthy of note is that there were no grinding teeth,‭ ‬suggesting that the mouthful was swallowed for processing in a digestive system developed for un-chewed food.‭\r\n       Analysis of available skull material suggests that Ankylosaurus had an exceptionally well developed sense of smell.‭ ‬This would have been a good adaption to detect potential predatory dinosaurs since as a low browser,‭ ‬Ankylosaurus would quite easily have its vision obscured by vegetation.\r\n       Ankylosaurus took armour plating to the extreme,‭ ‬even the eyelids were armoured.‭ ‬Osteoderms ran across its top side and are so extensive they have often been the best preserved parts of the Animal.‭ ‬Particularly large plates covered the shoulder and neck area with smaller pieces in between to allow for movement.‭ ‬Four large horns radiated out from the base of the skull,‭ ‬perhaps to stop large predators like Tyrannosaurus from closing their mouths around its head.\r\n       The tail club was composed of several overly large osteoderms fused together with the end vertebrae.‭ ‬Initially conceived as a defence against predators,‭ ‬it‭’‬s plausible that it may have been used for territorial combat with rivals.'),
(4, 2, 2, 2, 'Diplodocus', 12000, 6, 32, 15, 1, 'diplodocus.jpg', 'Diplodocus is thought to have been a‭ ‘‬leaf stripper‭’ ‬of vegetation.‭ ‬This is suggested by the peg like teeth that point forwards,‭ ‬as well as the fact that in adults the teeth are only present in the forward portion of the mouth.‭ ‬Diplodocus had a very particular wear pattern in that the teeth are more worn along their sides than on the ends like you would expect with animals that bit down on food.‭ ‬This means that Diplodocus fed by closing its mouth around vegetation so that the stems of the plant slotted in between the teeth.‭ ‬Diplodocus would then pull its head back so that as the stems ran between the teeth the softer foliage was stripped off and collected inside the mouth.‭ ‬A further adaptation was the snout of Diplodocus that was proportionately longer than other kinds of sauropod,‭ ‬which in the simplest terms means that Diplodocus could fit a greater length of plants in its mouth so that it ended up with a larger amount of vegetation.‭ ‬Juvenile Diplodocus had teeth in the back of the mouth as well,‭ ‬and this may indicate that they pulled their heads to the side rather than just back.‭ ‬This may have made feeding much easier for them given their smaller size,‭ ‬and when they grew so large they would almost always be feeding from above they would only have need for the front teeth.\r\n       The scleral rings‭ (‬bone that supported the shape of the eye‭) ‬of Diplodocus indicate that it was cathemeral.‭ ‬This means that Diplodocus was active for short periods throughout both the day and the night,‭ ‬and it‭’‬s possible that it adapted to such a way of life to ensure that it had a steady intake of food to keep its massive body going.\r\n       When it comes down to feeding Diplodocus is usually envisioned as being a low browser that kept its neck close to the ground for‭ ‬browsing.‭ ‬The shorter front legs support this idea as Diplodocus would have been in a more comfortable posture for feeding.‭ ‬It has been considered however that Diplodocus may have been able to rear up on its hind legs with its tail acting as a third support so that it could reach up and feed from the tree canopy as well.‭ ‬If true then this would make Diplodocus,‭ ‬and possibly similarly built sauropods,‭ ‬generalists that could adapt their browsing in accordance to the available plants of an area.‭ ‬This adaptability would have taken Diplodocus out of direct competition with other low browsing herbivores such as Stegosaurus which is also known from the same Morrison Formation at this time.‭ ‬A final feeding theory is that Diplodocus may have fed upon submerged aquatic plants by standing on the sides of a lake or large river and using its long neck to dip its head beneath the surface to pull up a mouthful of soft water weeds.'),
(5, 2, 1, 3, 'Dracoraptor', 40, 1, 3, 25, 0, 'dracoraptor.jpg', '       An interesting little dinosaur,‭ ‬Dracoraptor was a small theropod dinosaur that roamed around what is now Wales during the early Jurassic.‭ ‬The holotype‭ (‬first found‭) ‬individual of Dracoraptor has been reconstructed at just over two meters in length,‭ ‬however,‭ ‬the holotype was a juvenile animal,‭ ‬and adults would have been larger.‭ ‬Dracoraptor was lightly built,‭ ‬with long legs that would have allowed for a high running speed,‭ ‬enabling Dracoraptor to chase down swift moving prey.‭ ‬The small size and build however meant that Dracoraptor would have been limited to hunting smaller animals.\r\n       Fossils of the first individual of Dracoraptor were recovered in‭ ‬2014‭ ‬by Nick and Rob Hanigan,‭ ‬two brothers who are also amateur palaeontologists who were searching a cliff face for fossils of ichthyosaurs.‭ ‬Later in‭ ‬2015,‭ ‬more fossils were found by a student named Sam Davies.‭ ‬The fact that fossils of Dracoraptor have been found in a deposit known for marine creatures would indicate that at least one individual of Dracoraptor had been swept out to sea and then buried in marine sediment.‭ ‬Assuming that an individual/s was not swept out to sea by a river,‭ ‬it may be that Dracoraptor were known to hunt animals and scavenge carrion on the shoreline,‭ ‬effectively being beachcombers.'),
(6, 2, 1, 3, 'Pterodactylus', 150, 1, 2, 60, 1, 'pterodactylus.jpg', 'Pterodactylus has the honour of being the first pterosaur known to science,‭ ‬although the type of creature that it really was,‭ ‬was still largely unknown at the time of its discovery.‭ ‬Many scientists inferred that it was more like a bat,‭ ‬or something between a bat and a bird.‭ ‬Some even put forward the suggestion that it was actually a marine creature and suggested that the wings were actually flippers.\r\n       Time,‭ ‬along with new discoveries and further research eventually confirmed Pterodactylus as a flying reptile,‭ ‬but continuing incomplete knowledge and understanding of the group during the nineteenth century resulted in many discoveries being attributed to Pterodactylus as different species of the genus.‭ ‬To cause even further confusion,‭ ‬it was also not known that Pterodactylus individuals varied considerably with age,‭ ‬with the result that Pterodactylus juveniles and sub adults were incorrectly named as different species.\r\n       Studies towards the end of the twentieth century have not only successfully reduced the number of species,‭ ‬they have also identified clear yearly growth cycles.‭ ‬Currently the only universally accepted species is the type Pterodactylus antiquus.‭ ‬The only other strong contender is P.‭ ‬longicollum which represents a larger and longer necked individual that also has fewer teeth.‭ ‬P.‭ ‬longicollum may yet represent a separate genus,‭ ‬meaning that its future inclusion as a Pterodactylus species is by no means certain.\r\n       Other species that remain are considered Nomen dubium and these include Pterodactylus arningi,‭ ‬P.‭ ‬cerinensis,‭ ‬P.‭ ‬grandipelvis, ‬P.‭ ‬manseli,‭ ‬P.‭ ‬maximus,‭ ‬P.‭ ‬pleydelli and P.‭ ‬suprajurensis.‭ ‬These are pretty much only known from scant fossil material,‭ ‬and their inclusion in either Pterodactylus or indeed another pterosaur genus is difficult to establish with certainty.‭ ‬These problems with multiple names are not unique to Pterodactylus,‭ ‬and another Jurassic pterosaur,‭ ‬Rhamphorhynchus,‭ ‬has also had similar trouble with its taxonomic history.‭ '),
(7, 2, 1, 2, 'Allosaurus', 2500, 3, 9, 30, 1, 'allosaurus.jpg', '       Along with Tyrannosaurus,‭ ‬Allosaurus is probably the most often represented large theropod dinosaur in popular culture.‭ ‬This is because it was one of the earliest discovered large predators and is known from more remains than any other large predatory dinosaur.‭ ‬One myth about Allosaurus that does need to be dispelled is that it was the ancestor of Tyrannosaurus.‭ ‬Although both share a similar morphology and Allosaurus is much older,‭ ‬the tyrannosaurids are thought to have evolved from the coelurosaurid group independent of Allosaurus.‭ ‬This means that as the tyrannosaurids evolved,‭ ‬they replaced dinosaurs like Allosaurus as the dominant theropods of North America.\r\n\r\n'),
(8, 2, 2, 3, 'Iguanodon', 3200, 3.5, 10, 30, 0, 'iguanodon.jpg', 'Iguanodon has a firm place within dinosaur history books,‭ ‬not just because of the large expanse of fossil material attributed to it,‭ ‬but because it was the second dinosaur to ever be identified and named.‭ ‬The first dinosaur was actually Megalosaurus which was named a year earlier,‭ ‬and back then the term dinosaur didn\'t even exist.\r\n       The exact discovery of Iguanodon has become something of a popular story,‭ ‬but with successive retelling some of the details have become a little blurred.‭ ‬The main area of this is just who discovered the first Iguanodon teeth,‭ ‬one Gideon Mantell,‭ ‬or his wife Mary Ann.‭ ‬Gideon Mantell was a practising obstetrician and the popular version of this story is that his wife Mary Ann discovered the first teeth in a quarry in Whiteman\'s Green,‭ ‬Sussex while he was visiting a patient in‭ ‬1822.‭ ‬However a statement by Gideon Mantell himself in‭ ‬1851‭ ‬stated that it was he who had found the original teeth.‭ ‬Mantell\'s notes‭ ‬dating back to‭ ‬1820‭ ‬also show that he had discovered other material as well as different teeth from what we would call today a carnivorous theropod.‭ ‬There is also a mention of the discovery of teeth that seem to have belonged to a herbivore.‭ ‬This is why who discovered the Iguanodon teeth varies depending upon who is telling the story.'),
(9, 2, 1, 2, 'Dilophosaurus', 400, 3.5, 6, 38, 0, 'dilophosaurus.jpg', ' Dilophosaurus is a very distinctive dinosaur that is instantly recognisable by the two crests that are on top of its neck.‭ ‬It must be remembered however that Dilophosaurus never had a neck frill or spat venom, as was depicted in the 1993 film Jurassic Park.‭ ‬Those were the creations of artistic licence,‭ ‬not paleontological fact.‭\r\n       The crests themselves are most likely there for display,‭ ‬and could have been brightly coloured,‭ ‬particularly in the males.‭ ‬The crests are usually found disarticulated from the skull,‭ ‬but careful reconstruction has shown that they most likely sat on top of the skull.‭ ‬This arrangement is also considered more accurate than some earlier artistic reconstructions that have the crests running from the back of the skull and onto the neck.‭ ‬Such a reconstruction would have restricted the movement of the neck vertebra,‭ ‬a flawed configuration for a predator,‭ ‬hence the acceptance of the crests on top of the skull.\r\n       The skull also features a large notch in the upper jaw between the teeth of the pre-maxilla and maxilla.‭ ‬This notch is actually an inherent weakness in the skull and suggests that Dilophosaurus probably did not have a high bite force as other similarly sized dinosaurs that lacked the notch.‭ ‬One theory is that the notch would have enabled Dilophosaurus to dig out small prey items out of things like rock crevices,‭ ‬although bearing in mind that it was six meters long,‭ ‬it would not really be an efficient method of feeding for such a large dinosaur.‭ ‬Another theory is that Dilophosaurus lived the life of a scavenger.‭ ‬In this scenario Dilophosaurus would only need a bite force large enough to tear meat from a carcass,‭ ‬and could have used its size to intimidate and drive off smaller carnivores from their kill.‭ '),
(10, 2, 3, 3, 'Plesiosaurus', 500, 1, 4, 16, 0, 'plesiosaurus.jpg', 'First and most‭ ‬famous member of the plesiosaur group,‭ ‬Plesiosaurus caused a stir upon its discovery as nothing like it was previously known.‭ ‬Unfortunately Plesiosaurus suffered from the wastebasket taxon effect‭ ‬as any set of remains remotely similar to it‭ ‬ended up‭ ‬being assigned to the genus without much further thought‭ (‬a method of classification that also affected many other prehistoric animals such as the dinosaur Megalosaurus and the pterosaur Pterodactylus‭)‬.‭ ‬Later study of Plesiosaurus fossils would reveal that many of these remains actually represented completely different plesiosaurs.‭ ‬New plesiosaur genera created from the re-classification of plesiosaurus species include Hydrorion‭ and Seeleyosaurus. Some fossils of Plesiosaurus were renamed as the genus Occitanosaurus, but that genus has now been synonymised with Microcleidus.\r\n       How long Plesiosaurus spent in the water has long been a matter of debate.‭ ‬Classical art and reconstructions from the early years of marine reptile palaeontology depicted it as being just as capable of walking about on land as it could swim in the ocean.‭ ‬Also the long neck was almost always depicted as shooting out from the water and arcing around in'),
(11, 3, 1, 2, 'Tyrannosaurus', 7500, 5, 12, 40, 1, 'tyrannosaurus.jpg', 'Tyrannosaurus rex has been known to science since the end of the nineteenth century,‭ ‬and to this day remains arguably the most popular dinosaur the world over.‭ ‬This is evidenced by its almost mandatory inclusion in books,‭ ‬TV shows,‭ ‬games and websites that are about dinosaurs in general.‭ ‬Tyrannosaurus also probably has more toys and merchandising relating to it than any other dinosaur.\r\nOne of the most controversial theories about Tyrannosaurus is if it was actually a predator at all,‭ ‬but instead lived the life of a scavenger.‭ ‬Some have said that its size,‭ ‬even when combined with lower weight estimates meant that it could not run,‭ ‬as in both feet off the ground at the same time.‭ ‬Biomechanical studies have also shown that it was no way near as fast as it is sometimes depicted in movies.‭ ‬It is popularly said that for a Tyrannosaurus to run at‭ ‬25‭ ‬miles per hour,‭ ‬it would need up‭ ‬to of around‭ ‬80%‭ ‬of its muscle mass in its legs,‭ ‬an unheard of scenario.‭ ‬What are considered more realistic estimates place top speed at around the‭ ‬11‭ ‬miles per hour mark.‭ '),
(12, 3, 2, 2, 'Triceratops', 12000, 4, 8, 30, 1, 'triceratops.jpg', 'When it comes to popularity Triceratops is only eclipsed by Tyrannosaurus,‭ ‬and even then there are a considerable portion of people who actually prefer Triceratops over the aforementioned apex predator.‭ ‬Yet despite its frequent depiction from toys to dinosaur books,‭ ‬films and other media,‭ ‬there is still a lot of controversy and misconception surrounding this much loved dinosaur.\r\n Triceratops is one of the few dinosaurs that hardly need a description.‭ ‬Like with other large ceratopsian dinosaurs it was a quadrupedal‭ (‬four legged‭) ‬herbivore that had a proportionately large skull in relation to its total body size,‭ ‬just under a third of the total length.‭ ‬The skull was adorned with a short neck frill that rose up from the back,‭ ‬and three horns.‭ ‬The largest horns were the two that rose up from above the eyes and reached up to one meter long,‭ ‬while the nasal horn that pointed up from the snout was much smaller.‭ ‬Some specimens of Triceratops sometimes have epoccipitals‭ (‬small pointed bones‭) ‬that are attached to the edge of the frill.‭ ‬Triceratops was once classed as a centrosaurine ceratopsian dinosaur because of this small frill,‭ ‬but today it is considered to be a‭ ‬chasmosaurine‭ (‬often alternatively referred to as ceratopsine‭) ‬on the basis of the well-developed brow horns that are usually greatly reduced or absent in centrosaurines.‭ ‬The frill itself is still interesting because its short and solid which makes it very different from other known genera that usually have long frills with holes in them.‭ ‬However this feature may yet have greater ramifications for Triceratops and some other ceratopsian dinosaur genera‭ (‬click to skip down to this‭)‬.'),
(13, 3, 1, 4, 'Velociraptor', 15, 0.7, 2, 64, 1, 'velociraptor.jpg', 'The overall appearance of Velociraptor was that of a lightweight bipedal hunter built for speed, though differed from most other known dromaeosaurid dinosaurs by having an upturned snout at the front of a long,‭ ‬low skull.‭ ‬The skull was filled with small teeth,‭ ‬suitable for taking meat off a carcass,‭ ‬but not for killing.‭ ‬Instead of a‭ ‘‬killing bite‭’‬,‭ ‬Velociraptor would instead utilise the enlarged sickle shaped claws that it had on the second toe of each foot. The hands of Velociraptor were large and suitable for grabbing onto prey.‭ ‬The tail had a special series of tendons that kept it stiffened and erect,‭ ‬providing a crucial form of balance when running and manoeuvring at speed.‭ ‬Examination of the scleral rings has drawn comparison with modern birds that are nocturnal,‭ ‬also hinting at a nocturnal lifestyle for Velociraptor.\r\n       Velociraptor is one of the dinosaurs that without question had feathers.‭ ‬Evidence for this comes from the quill knobs on the fossil material,‭ ‬particularly the forearms.‭ ‬These are where feathers were anchored in place,‭ ‬and without feathers there would be no quill knobs‭ (‬although on the other hand,‭ ‬lack of quill knobs does not mean lack of feathers‭)‬.‭ ‬The feathers on Velociraptor would have provided insulation allowing it to maintain a high metabolism,‭ ‬a vital requirement for a very agile and active hunter.‭ ‬Also Velociraptor lived in a fairly arid landscape and the feathers would have provided extra protection against the cold nights that are often associated with arid environments. A further idea is that the feathers may have also served a display purpose.'),
(14, 3, 1, 1, 'Spinosaurus', 8300, 7, 15, 18, 1, 'spinosaurus.jpg', 'Spinosaurus is now often regarded as the biggest known meat eating theropod dinosaur (herbivores like large sauropods were of course bigger),‭ ‬however the actual size is really just an estimate extrapolated from an educated guess.‭ ‬What is clear is that Spinosaurus was a very large animal but herein lies the problem as the larger animals get,‭ ‬the less complete their remains tend to be because it takes so much more material to bury them and protect the body from scavengers and as well as the full ravages of nature.‭ ‬The more an animal is exposed upon death means the less complete long term remains like fossils will be.\r\n       Still with a smaller estimate of just over twelve and a half meters,‭ ‬Spinosaurus would have been comparable to Tyrannosaurus,‭ ‬and only just smaller than Giganotosaurus‭ (‬it needs to be remembered that even though Giganotosaurus has a size estimate of thirteen meters,‭ ‬it would still only be marginally larger than the largest known Tyrannosaurus‭)‬.‭ ‬Comparison to other smaller spinosaurids that were consequently scaled up to the same size as the Spinosaurus material points to sizes that approach the larger length estimate as indeed being possible.‭ ‬For the time being at least,‭ ‬Spinosaurus is likely to remain the longest theropod.\r\n       Length however is but one measure of size,‭ ‬and often it is not the length of the animal that is important but the weight.‭ ‬Gauging the weight of an animal from bones is considerably more difficult that just measuring the length because so many factors need to be considered. Different kinds of tissue can be denser than others resulting in different weights even though they take up the same space‭ (‬for example muscle weighs more that fatty tissue‭)‬.‭ ‬You also need to look at how the tissue is distributed as many‭ \'‬larger‭\' ‬animals are often only large when viewed from one angle and can be very thin in their actual build.‭'),
(15, 3, 2, 1, 'Amargasaurus', 2600, 2.5, 10, 25, 0, 'amargasaurus.jpg', 'Although not as famous as some sauropods like Brachiosaurus,‭ ‬the distinctive appearance of Amargasaurus has made it a firm favourite amongst many who are interested in dinosaurs.‭ ‬Two rows of spikes,‭ ‬the largest of which are on the neck run all the way down the back of Amargasaurus from the head to the end of the tail.‭ ‬There are two main theories to what these spines looked like in life,‭ ‬the first one being that they were supports for a double sail.‭ ‬The second is that there was no skin sail at all,‭ ‬and that the spikes would have been covered by horn.‭ ‬This is based upon‭ ‬the idea that a skin sail would have made the neck too rigid to bend,‭ ‬although this would be more down to how much the neck had to bend in order for Amargasaurus to drink and feed.\r\n       Aside from what a living Amargasaurus looked like,‭ ‬another question would be why it had these enlarged spikes.‭ ‬Predator defence is a possibility but it seems unlikely as if this were the case you would expect the spines to have been enlarged and equally sized over at least the whole back of the body as well.‭ ‬If a sail was carried by the spines then thermoregulation is something to consider,‭ ‬however this is also unlikely as no other sauropod is known to have needed such a temperature regulation device.‭ ‬Also two sails close together would have shielded one another from the wind making them at best half as efficient as‭ ‬a‭ ‬single sail.'),
(16, 3, 3, 3, 'Mosasaurus', 13000, 2, 18, 48, 0, 'mosasaurus.jpg', ' Although‭ ‬probably‭ ‬not‭ ‬quite‭ ‬as long as some of the larger mosasaurs,‭ ‬Mosasaurus seems to have been one of the more heavily built.‭ ‬In fact Mosasaurus was so robust that a skull discovered in‭ ‬1998‭ ‬was mistakenly classed as belonging to Prognathodon,‭ ‬a mosasaur that specialised in eating armoured prey.‭ ‬Being such a large creature with a heavy build suggests that Mosasaurus had a preference for larger slower prey,‭ ‬quite probably other marine reptiles.‭ ‬Further support for this specialisation and behaviour comes from the side wards facing eyes that meant Mosasaurus had poor stereoscopic vision.‭ ‬A lack of this ability strongly suggests that Mosasaurus did not rely heavily upon gauging distances between itself and prey and as such probably did not rely upon speed to chase down prey over distance.\r\n       While some would envision Mosasaurus as a scavenger the fossil evidence also contradicts this as the olfactory bulb‭ (‬the part that processes smells‭) ‬is one of the most poorly developed areas.‭ ‬While many oceanic predators use smell to detect injured prey for an easy meal,‭ ‬Mosasaurus would have been at a disadvantage to most of these.‭ ‬Perhaps the most likely scenario for Mosasaurus hunting behaviour is one that saw it hanging around the upper ocean and waiting for other marine reptiles to surface for air.‭ ‬At this time they would be at their most vulnerable as they would be in the most lit portion of the water‭ (‬and silhouetted against the light if Mosasaurus was looking up from below‭)‬,‭ ‬and unable to dive back down‭ ‬as‭ ‬they would drown without‭ ‬a‭ ‬fresh supply of air in their body.‭ ‬Using its tail to provide a quick burst of speed Mosasaurus could launch a sudden attack that if it did not kill the prey,‭ ‬would at least injure it so that Mosasaurus could follow and hound it until it tired.'),
(17, 3, 2, 2, 'Lambeosaurus', 4000, 3, 14, 25, 0, 'lambeosaurus.jpg', 'beosaurus the dinosaur\r\n       Lambeosaurus is one of the hadrosaurs that is frequently depicted in dinosaur books and toys,‭ ‬and study of this genus is required learning for anyone who wishes to know more about the hadrosaurs in general.\r\n       The function of the crest is one of the most often talked about areas of the body.‭ ‬One explanation is that the crest was used as either a snorkel or an air chamber for trapping a supply of breathable air so that Lambeosaurus could hold their heads underwater for extended periods.‭ ‬This however would require Lambeosaurus to regularly be active within bodies of water,‭ ‬and it does not explain the variance in form of head crests between Lambeosaurus and other lambeosaurine genera.'),
(18, 3, 2, 1, 'Parasaurolophus', 2500, 3.5, 10, 40, 0, 'parasaurolophus.jpg', 'Out of all the hadrosaurs‭ (‬also known as the duck-billed dinosaurs‭) ‬Parasaurolophus is one of the most‭ ‬widely recognised thanks‭ ‬to its very distinctive skull crest.‭ ‬The name Parasaurolophus is a bit of a mouthful,‭ ‬but this is based around the early interpretation that Parasaurolophus was similar to another genus names Saurolophus‭ (‬which means‭ ‘‬lizard crest‭) ‬because Saurolophus also has a skull crest,‭ ‬though not as large or as ornate as Parasaurolophus.‭ ‬However under modern systematics,‭ ‬Parasaurolophus is classed as a lambeosaurine hadrosaurid because of the hollow crest,‭ ‬whereas Saurolophus is the type genus of the Saurolophinae‭ (‬previously Hadrosaurinae‭) ‬a sister group of hadrosaurids noted for having solid to no crests at all.‭'),
(19, 1, 2, 3, 'Asylosaurus', 25, 0.7, 2, 12, 0, 'asylosaurus.jpg', '  The holotype remains of Asylosaurus were originally attributed to the genus Thecodontosaurus,‭ ‬but a review by Peter Galton saw these remains established as a new genus.‭ ‬The genus names means‭ ‘‬unharmed/sanctuary lizard‭’ ‬and this is a reference as to how this set of remains were shipped from England to the United States by Othniel Charles Marsh in the late nineteenth century.‭ ‬Had they have stayed with the other Thecodontosaurus fossils in England,‭ ‬they would have been destroyed in World War Two when the portion of the museum they were being stored was bombed.\r\n   Asylosaurus is a genus of sauropodomorph dinosaur,‭ ‬the forerunners to the more advanced sauropods that would become common during the Jurassic.‭ ‬The Asylosaurus genus may have encountered and lived alongside the other sauropodomorph genera Thecodontosaurus and Pantydraco.'),
(20, 1, 2, 4, 'Isanosaurus', 5500, 2, 7, 8, 0, 'isanosaurus.jpg', 'Isanosaurus is recognised as being one of the first sauropods to appear on the planet,‭ ‬replacing the previous earliest sauropod title holder Vulcanodon.‭ ‬It should be mentioned here that at the time Vulcanodon was thought to have lived in the early Hettangian stage of the Jurassic,‭ ‬just after the Triassic/Jurassic boundary,‭ ‬though a‭ ‬2004‭ ‬study by Adam Yates‭ ‬covering the Vulcanodon holotype fossil location led to the realisation that Vulcanodon lived much later in the Jurassic during the Toarcian stage.\r\n       Back to Isanosaurus,‭ ‬the genus is noted to have been one of the first to adapt to an exclusive quadrupedal form of locomotion.‭ ‬Evidence for a quadrupedal posture comes from the femur which in Isanosaurus is straight,‭ ‬while in known sauropodomorph genera which were at least partially bipedal,‭ ‬the femur is always curved.‭ ‬Isanosaurus is also noted for having vertebrae that had high neural spines,‭ ‬whereas the neural spines on the vertebrae of sauoropodomorphs usually have low neural spines.'),
(21, 1, 2, 1, 'Mussaurus', 150, 1, 3, 9, 0, 'mussaurus.jpg', 'When first described in‭ ‬1979,‭ ‬Mussaurus was only known from juvenile individuals,‭ ‬and until‭ ‬2013‭ ‬this was supposedly the case.‭ ‬However in‭ ‬1980‭ ‬the adult were actually described,‭ ‬they had just been classed under the genus Plateosaurus.‭ ‬With a re-evaluation of these in‭ ‬2013,‭ ‬Mussaurus is also known from adult remains,‭ ‬and the adult size of this sauropodomorph dinosaur is estimated to be about three meters.‭ ‬Prior to this discovery the genus Coloradisaurus was speculated as being the possible adult form.\r\n       As a sauropodomorph dinosaur,‭ ‬living in the late Triassic,‭ ‬Mussaurus is thought to have been primarily if not exclusively an eater of plants.‭ ‬The skulls of juveniles are noted as being shorter but higher in proportion than adults with larger than usual orbits‭ (‬eye sockets‭)‬.‭ ‬These are common juvenile features of dinosaurs,‭ ‬and they reflect how the skeleton of juveniles had to form in order to fit inside the eggs as the embryos developed.\r\n       Mussaurus represents a possible transitional form that links sauropodomorphs with sauropods.'),
(22, 1, 2, 5, 'Melanorosaurus', 1800, 2.5, 8, 6, 0, 'melanorosaurus.jpg', ' Melanorosaurus is usually referred to as a sauropodomorph although it’s precise position can vary according to different sources.‭ ‬Nevertheless,‭ ‬Melanorosaurus represents a form that is intermediate between the bipedal sauropod ancestors,‭ ‬and the later larger quadrupedal forms.‭ ‬Also while not as grand in size as the later sauropods,‭ ‬at up to eight meters long Melanorosaurus was still one of the largest known land animals of its day.'),
(23, 1, 2, 3, 'Plateosaurus', 3000, 2.5, 10, 6, 0, 'plateosaurus.jpg', 'lateosaurus is probably the best understood sauropodomorph dinosaur currently known,‭ ‬and also one of the oldest dinosaur genera.‭ ‬Named in‭ ‬1837,‭ ‬Plateosaurus actually predated the creation of the Dinosauria by Richard Owen in‭ ‬1842,‭ ‬though the genus missed out on being one of the defining dinosaur genera‭ (‬instead Owen used Megalosaurus,‭ ‬Iguanodon and Hylaeosaurus‭)‬.‭ ‬Regardless of this,‭ ‬study of Plateosaurus has revealed that in terms of contribution to the science of palaeontology,‭ ‬Plateosaurus is one of the most important dinosaurs.\r\n       Plateosaurus used to be known as a prosauropod,‭ ‬but modern terminology sees it described as a sauropodomorph.‭ ‬Either way,‭ ‬what this means is that the Plateosaurus genus represents a type of dinosaur that was ancestral to the later and larger sauropods of the Jurassic.‭ ‬The sauropodomorphs also help to reveal how sauropods and theropods have a shared ancestry despite being very different animals in terms of ecological niche.'),
(24, 1, 2, 1, 'Unaysaurus', 70, 0.8, 3, 6, 0, 'unaysaurus.jpg', 'Unaysaurus is the first confirmed sauropodomorph dinosaur to be named from Brazil,‭ ‬though there is speculation that another genus named in‭ ‬1999‭ ‬called Teyuwasu might also be a sauropodomorph.‭ ‬The closest relative to Unaysaurus is thought to be the famous Plateosaurus from Germany.'),
(25, 3, 1, 3, 'Balaur', 30, 0.8, 2, 22, 0, 'balaur.jpg', 'The dromaeosaurids are a very popular group of dinosaurs that all share a few common features.‭ ‬These include reasonably lightweight build,‭ ‬long stiff tails for balance,‭ ‬legs and pelvis adapted for very fast running and a large sickle shaped claw on the second toe of each foot.‭ ‬Balaur however is a dromaeosaur with a difference‭; ‬instead of having one sickle shaped claw on each foot it had two.‭ ‬These claws were on the second and first toes,‭ ‬and seem to be the principal killing weapons since the hands are known to have one digit less than most other known dromaeosaurids.\r\n       In popular fiction the large sickle claws are usually interpreted as slashing weapons that could open up the side of an animal in a single stroke,‭ ‬an idea based upon very early ideas about dinosaurs like Balaur.‭ ‬However more modern analysis has produced scenarios where the sickle claws are more suited to stabbing rather than slashing.‭ ‬Additionally they may have also been used for getting a grip onto similarly sized or larger prey,‭ ‬and in the case of Balaur,‭ ‬the two sickle claws may have been to compensate for a lack of one of the hand digits.'),
(27, 2, 2, 5, 'Kentrosaurus', 3000, 2, 5, 8, 0, 'kentrosaurus.jpg', 'After Stegosaurus itself,‭ ‬Kentrosaurus is easily the best known of the stegosaurs.‭ Many herbivores were known to have herded,‭ ‬and support for this in Kentrosaurus comes from the massive collection of bones from the‭ ‬Tendaguru beds.‭ ‬Like other Stegosaurs,‭ ‬Kentrosaurus was considered to be a low browser,‭ ‬although it‭’‬s considered possible for Kentrosaurus to rear up on its hind legs. The weight distribution of Kentrosaurus is interesting as the centre of mass is placed just forward of the hip,‭ ‬unusual in a quadrupedal animal.‭ ‬This means that very little of the body weight was supported by the front legs,‭ ‬and suggests that Kentrosaurus had‭ ‬a very tight turning circle.‭\r\n'),
(28, 3, 2, 5, 'Nigersaurus', 2000, 1.5, 9, 7, 0, 'nigersaurus.jpg', 'Nigersaurus was a very specialised sauropod,‭ ‬evolved for feeding as a low browser.‭ ‬To accomplish this,‭ ‬the skull was shaped so that the jaws formed a very broad,‭ ‬flat edge across the front maximising the amount of vegetation gathered in a single bite.‭ ‬Inside these jaws were hundreds of teeth arranged in a single straight line near the edge of the mouth that would have been ideal for cropping very low vegetation with little effort.‭ ‬A further adaption is the structure of the inner ear that indicates that the head was usually carried in the down position so that the front of the mouth was always presented towards the ground where its choice food supply was.'),
(35, 2, 1, 5, 'Elaphrosaurus', 500, 2.5, 6, 24, 0, 'elaphrosaurus.jpg', 'Elaphrosaurus has been something of an enigma for palaeontologists as while it is generally regarded as a ceratosaur,‭ ‬its proportions are similar to some other kinds of theropods.‭ ‬The overall appearance of Elaphrosaurus is that of a lightweight hunter that relied more upon speed rather than strength to take down prey.‭ ‬The tibia in particular is longer than the femur which is a good sign that Elaphrosaurus would have been a fast runner.‭ ‬In fact it is these leg proportions that once led to the suggestion that Elaphrosaurus may have been a primitive ornithomimosaur after it was initially thought to have been a late surviving coelophysid.‭ ‬The latter conclusion was based upon the long neck that probably supported a smaller skull than other theropods which are known to have larger skulls on shorter necks.'),
(36, 3, 1, 2, 'Troodon', 50, 1, 3, 55, 0, 'troodon.jpg', ' Remarkably when Troodon was first‭ \'‬discovered‭\' ‬it was only known from a tooth,‭ ‬and it was the description of this tooth that gave rise to the genus.‭ ‬Although naming a creature after only discovering its teeth is hard to imagine today,‭ ‬it was a common place practice in the nineteenth century,‭ ‬and at least in the case of Troodon the teeth were different to most others.‭ ‬Two problems arose from describing Troodon from only teeth.‭ ‬One,‭ ‬while these teeth were curved like in a carnivore,‭ ‬they had curved serrations similar to some herbivores.‭ ‬Two,‭ ‬because no one knew of any skeletal remains,‭ ‬no one knew what kind of dinosaur it actually was,‭ ‬or even if it really was a dinosaur for that matter.‭'),
(37, 3, 1, 2, 'Deinonychus', 100, 1.5, 3, 10, 0, 'deinonychus.jpg', 'Although Deinonychus was first discovered in‭ ‬1931,‭ ‬it would not be until the‭ ‬1960s with the advent of more discoveries that it would get named and studied in detail.‭ ‬These studies helped lead to one of the most radical ideas put forward in the field of palaeontology‭; ‬at least some of the dinosaurs were warm blooded.‭\r\n       Dinosaurs had always been compared to the reptiles of today which are always slow and sluggish until they can warm themselves up by exposing themselves to heat sources such as basking in strong sunlight.‭ ‬Dinosaurs as a whole had always been considered to be‭ ‘‬just big lizards‭’ ‬but smaller Dinosaurs such as Deinonychus were built to be very small and very fast.‭ ‬Such a lifestyle necessitates the need for a faster metabolism.‭ ‬This in turn is better provided for by being warm blooded,‭ ‬which in turn again requires adaptations for conserving body heat.‭ ‬While there is no direct evidence to support the placement of feathers on Deinonychus,‭ ‬it is a member of the dromaeosaur family,‭ ‬whose members through other fossil evidence are‭ ‬accepted to have had feathers.‭ ‬It would actually be very surprising if Deinonychus did not have feathers.‭ '),
(38, 3, 1, 1, 'Carnotaurus', 3000, 3.5, 8, 45, 1, 'carnotaurus.jpg', 'While Carnotaurus had the standard theropod morphology of a bipedal animal with large head and small arms,‭ ‬it still possessed a number of features that made it quite unique among the large theropods.‭ ‬One such feature‭ ‬is the arms,‭ ‬which are not just small like you would expect,‭ ‬but are positively tiny.‭ ‬Further to this the fingers were fused together meaning they could not move independently from one another.‭ ‬On top of this the fingers also lacked claws.‭ ‬Had Carnotaurus not gone extinct,‭ its descendents may have eventually lost these arms all together.\r\n       Carnotaurus displays a short and deep‭ (‬tall‭) ‬skull,‭ ‬something which is characteristic of the abelisaurid group.‭ ‬Despite this height depth however,‭ ‬the skull was very narrow,‭ ‬and the mandible‭ (‬lower jaw‭) ‬very small.‭ ‬This means that Carnotaurus did not have the requirements to support strong muscle attachment,‭ ‬and as such it probably had quite a weak bite force,‭ ‬especially when compared to the large tyrannosaurids.‭ '),
(39, 3, 1, 2, 'Albertosaurus', 3200, 4, 10, 25, 1, 'albertosaurus.jpg', ' The first remains of Albertosaurus were recovered from the Horseshoe Canyon Formation in‭ ‬1884,‭ ‬and these were the type specimen along with a smaller skull and some of the post crania.‭ ‬However Albertosaurus was not yet identified and when these parts were studied in‭ ‬1892‭ ‬by Edward Drinker Cope,‭ ‬he assigned them to another dinosaur called Laelaps incrassatus that he had named earlier in‭ ‬1866.‭ ‬Now this is where things start to get confusing because the name Laelaps had already been applied to a mite,‭ ‬and because of this Othniel Charles Marsh had changed Laelaps to Dryptosaurus in‭ ‬1877.‭ ‬Anyone who recognises the names Marsh and Cope is probably already familiar with the‭ \'‬Bone Wars‭\' ‬and the fierce rivalry between them.‭ ‬Cope refused to acknowledge the change and it was up to the eminent palaeontologist Lawrence Lambe to formally rename the specimens Dryptosaurus incrassatus.‭ ‬This still was not the end because the palaeontologist Henry Fairfield Osborn disputed the renaming citing two key reasons.‭ ‬The first was that Dyptosaurus incrassatus‭ (‬formerly Laelaps incrassatus‭) ‬was based only upon the description of generic tyrannosaur teeth with no bone material to back it up,‭ ‬thus making accurate comparison near impossible.‭ ‬The second was that the fossil material recovered was different enough from the Dryptosaurus type species D.‭ ‬aquilunguis to be considered its own species.‭ ‬So in‭ ‬1905,‭ ‬Osborn renamed the material Albertosaurus in reference to the part of the world it was found.'),
(40, 2, 2, 5, 'Vulcanodon', 3500, 3.5, 9, 8, 0, 'vulcanodon.jpg', 'Vulcanodon is easily one of the more popular dinosaur genera,‭ ‬and one that has had a number of‭ ‘‬firsts‭’ ‬attributed to it.‭ ‬However,‭ ‬our understanding of this genus and changed considerably since it was first described in‭ ‬1972.‭ ‬The name Vulcanodon means‭ ‘‬volcano tooth‭’ ‬and‭ ‬is a reference to the discovery of Vulcanodon between two Jurassic aged lava beds‭ (‬long cooled down‭)‬.‭ ‬The word volcano is derived from the latin vulcano,‭ ‬which in turn is derived from Vulcanus,‭ ‬more commonly known in English as Vulcan,‭ ‬the ancient Roman god of fire.'),
(42, 3, 2, 1, 'Argentinosaurus', 100000, 8, 36, 7, 0, 'argentinosaurus.jpg', 'Argentinosaurus may well be the largest sauropod and by extension,‭ ‬dinosaur ever to live.‭ ‬Unfortunately only a few parts of the skeleton has been found so these have had to be compared with other more complete skeletons of different yet similar dinosaurs,‭ ‬with the closest match possibly being other titanosaurs such as Saltasaurus and Rapetosaurus.‭ ‬This has allowed for what are considered to be more accurate estimates for Argentinosaurus,‭ ‬but the exact size is still uncertain.‭ ‬Until more fossils of Argentinosaurus that fill the existing gaps can be found,‭ ‬we may never know the exact size for sure. One dinosaur that might actually have been much bigger than even Argentinosaurus is the potentially colossal Amphicoelias.\r\n       South America seems to have been an evolutionary cradle for dinosaurs.‭ ‬While the other great sauropods such as Brachiosaurus and Diplodocus died out by the end of the Jurassic,‭ ‬the large South American sauropods like Argentinosaurus continued until well into the Cretaceous.‭\r\n       Argentinosaurus was not the only giant dinosaur to hail from South America,‭ ‬the large theropod carnivore Giganotosaurus that was larger than Tyrannosaurus,‭ ‬was also active at the same time and general location as Argentinosaurus.'),
(43, 3, 2, 6, 'Atlascopcosaurus', 120, 1.5, 3, 15, 0, 'atlascopcosaurus.jpg', 'Unfortunately like with so many other Australian dinosaurs,‭ ‬Atlascopcosaurus is based upon the description of very incomplete remains,‭ ‬in this case part of a jaw.‭ ‬This jaw was been compared to other dinosaur types which has yielded the conclusion that Atlascopcosaurus was probably a member of the Euornithopoda.‭ ‬Also a very rough estimate of a two to three meter long body length has been established for Atlascopcosaurus,‭ ‬though further refinement of this will be impossible without further fossil discoveries.\r\n       The name Atlascopcosaurus is derived from the‭ ‬Atlas Copco company which sponsored the dig which discovered Atlascopcosaurus by providing equipment.‭ ‬The type species name is in honour of William Loads,‭ ‬the then state manager for Atlas Copco who also assisted in the dig.'),
(44, 3, 2, 6, 'Austrosaurus', 16000, 5.5, 15, 7, 0, 'austrosaurus.jpg', '  As with other Australian sauropods such as Wintonotitan and Diamantinasaurus, the skull and most of the vertebrae are unknown. What can be learned from the available material is that Austrosaurus had a fairly level back between its shoulders and hips with what appears to be only twenty centimetres height difference between the two.\r\n       Study of the available vertebra of Austrosaurus appear very primitive in that they are not hollow or display any of the associated weight saving features that had already been developed in earlier sauropods as exhibited in Rhoetosaurus, suggesting that Austrosaurus was a late surviving primitive form.'),
(45, 3, 2, 6, 'Leaellynasaura', 10, 0.5, 2, 20, 0, 'leaellynasaura.jpg', 'Leaellynasaura has been named after the daughter of its discoverers (the amicagraphica part recognises the Friends of the Museum of Victoria and the National Geographic Society which supplied funding for the research), and represents a dinosaur that was adapted to life in the Antarctic conditions of the early Cretaceous. Although back then the Antarctic was not the frozen wasteland it is today, creatures living there would still have had to adapt to prolonged periods of darkness and the resulting climate that would have been cooler than the rest of the world. The most obvious adaptation is a skull that appears to have housed enlarged eyes that would have been able to process low light levels, as can be seen in creatures alive today. With a tail that is three times longer than its body, Leaellynasauria has the proportionately longest tail among the known ornithischian dinosaurs.'),
(46, 3, 2, 6, 'Minmi', 300, 0.6, 2, 5, 0, 'minmi.jpg', ' Well preserved dinosaur remains are rare from Australia,‭ ‬but Minmi is one of the exceptions.‭ ‬This‭ ‬is‭ ‬in part due to the small body size of Minmi which meant that it would have been‭ ‬more‭ ‬easily buried than a larger animal,‭ ‬something that would have protected the remains from being scattered by scavengers and weather.‭ ‬Fortunately the remains were discovered before they were exposed to the full effects of today‭’‬s Australian climate which can quickly erode and damages valuable fossil specimens when they are exposed.'),
(47, 3, 1, 6, 'Australovenator', 1000, 2.5, 6, 32, 0, 'australovenator.jpg', ' Much of Australovenator is missing but the parts which are known show a lightweight and fast carnivore that could run down its prey.‭ ‬Study of the fossils have also brought similarities and comparisons between Fukuiraptor from Japan,‭ ‬and Megaraptor from South America, and for this reasons Australovenator is usually termed as a megaraptoran theropod dinosaur.\r\n       Australovenator was given the nickname‭ \'‬Banjo‭\'‬,‭ ‬in reference to the Australian poet Banjo Patterson.‭ ‬References to Banjo and his works were also made for the sauropod dinosaurs Wintonotitan and Diamantinasaurus,‭ ‬both also from the Winton Formation and named in the same year as Australovenator.'),
(48, 3, 1, 4, 'Gallimimus', 200, 3, 6, 56, 1, 'gallimimus.jpg', ' Although discovered in‭ ‬1972,‭ ‬Gallimimus was a relatively little‭ ‬known dinosaur until its appearance in the‭ ‬1993‭ ‬movie blockbuster Jurassic Park.‭ ‬In one of the more famous scenes of this film a whole herd of Gallimimus gets chased by the Tyrannosaurus before one slips and is killed by this predator.‭ ‬Although science fiction,‭ ‬this scene might not be too far off the mark as a tyrannosaur named Tarbosaurus did roam Mongolia at the same time as Gallimimus and there has been speculation that Tarbosaurus might actually represent an Asian species of Tyrannosaurus.\r\n       Gallimimus is what is called an ornithomimid dinosaur,‭ ‬a group of specially adapted lightweight theropods that became one of the more common dinosaur types towards the end of the Cretaceous period.‭ ‬Of these Gallimius was one of if not the biggest of the group,‭ ‬often credited at being six meters long but with other fossil material indicating a larger size of up to eight meters long.‭ ‬Mongolia seems to have had the right conditions for freak giant dinosaur genera with another example being Gigantoraptor,‭ ‬a giant oviraptorid when compared to other dinosaurs of its kind.‭ ‬To date the only other '),
(49, 3, 1, 4, 'Raptorex', 120, 2, 3, 42, 0, 'raptorex.jpg', 'Raptorex is a very dubious genus of tyrannosaur that many consider to be a juvenile Tarbosaurus.‭ ‬When Raptorex was first revealed to the world the holotype had already been dug out of the ground and shipped to Japan where it was purchased by an American businessman.‭ ‬Back then the fossil was being identified as a juvenile Tarbosaurus and coming from the Yixian Formation of China.‭ ‬Alarm bells should already be ringing at this for two reasons.‭ ‬First,‭ ‬there is a law in China that makes it illegal to export genuine fossils from beyond China’s borders,‭ ‬and any legitimate original fossils would have to be on the black market,‭ ‬a far from reliable scientific source as black market fossils dealers will say anything about fossils just to sell them.'),
(50, 3, 1, 3, 'Baryonyx', 1500, 3.5, 9, 28, 0, 'baryonyx.jpg', '   In‭ ‬1983‭ ‬a fossil hunter named William Walker discovered a large fossilised claw in a clay pit.‭ ‬Retrieval of this claw also resulted in the recovery of associated bones that revealed a new and previously unknown type of theropod dinosaur.‭ ‬Alan Charig and Angela Milner described and formerly named the new dinosaur Baryonyx after the initially discovered large and heavy claw.‭ ‬The species name B. walkeri is in honour of William Walker.\r\n       The key area that made Baryonyx different from previous discoveries was the fact that its skull resembled the skull of a crocodile,‭ ‬and not that of other more classically known dinosaurs like Megalosaurus.‭ ‬Today Baryonyx is referred to as a spinosaurid dinosaur,‭ ‬the group named after the later and much larger Spinosaurus.‭ ‬An interesting association between these two dinosaurs is that while Spinosaurus was discovered and named much earlier than Baryonyx in‭ ‬1912,‭ ‬its skull was not known until the‭ ‬1990‭\'‬s.‭ ‬It was partly‭ ‬the discovery of Baryonyx along with other spinosaurids that allowed for this to be realised and up until this point Spinosaurus\'s skull was recreated to look just like any other‭ ‬carnosaur theropod.');
INSERT INTO `dinosaur` (`id`, `period_id`, `diet_id`, `continent_id`, `name`, `weight`, `height`, `lenght`, `top_speed`, `top`, `img`, `info`) VALUES
(51, 3, 2, 4, 'Tsintaosaurus', 3000, 3.5, 10, 12, 0, 'tsintaosaurus.jpg', ' One of the more popular hadrosaurids,‭ ‬Tsintaosaurus is actually not known by many individuals.‭ ‬The popularity of Tsintaosaurus is all down to the forward pointing crest that adorns the top of the skull.‭ ‬There was one widespread speculation that this crest was simply a product of the fossilisation process,‭ ‬and that the bone that made up the crest was actually from somewhere else,‭ ‬something that further led to speculation that Tsintaosaurus was actually the same genus of dinosaur as the hadrosauroid Tanius.‭ ‬A further specimen was eventually found however,‭ ‬and again the forward pointing crest was evident and in exactly the same place as the first.‭ ‬This revealed that the crest is indeed that same as it was in the living animals and that while both Tsintaosaurus and Tanius are related,‭ ‬they are very different genera. In 2013 a study (Prieto-Márquez & Wagner) resulted in a new reconstruction for the head crest for Tsintaosaurus. Instead of a simples spike, the crest actually rose up from the nasal bones and curved around above the back of the skull. '),
(52, 2, 1, 3, 'Compsognathus', 4, 0.4, 1, 56, 0, 'compsognathus.jpg', ' Despite its diminutive size Compsognathus is one of the dinosaurs that are best known to science.‭ ‬Not only was the skeleton well persevered but the remains of its last meal,‭ ‬a small lizard named Bavarisaurus were also found inside the specimen proving without doubt that Compsognathus was a carnivore.‭ ‬At the time of its discovery Compsognathus was the smallest dinosaur known to the still new science of palaeontology resulting in the frequent comparison of Compsognathus being the size of a chicken‭ (‬although one meter long about half that length is tail‭)‬.‭ ‬However Compsognathus no longer carries the title of smallest dinosaur as the discovery of maniraptorian dinosaurs like Microraptor has shown that dinosaurs were capable of being very small,‭ ‬and further discoveries are likely to reduce this size even further.'),
(53, 2, 1, 4, 'Guanlong', 90, 1.5, 3, 56, 0, 'guanlong.jpg', 'Guanlong is well-known among palaeontological circles as the first tyrannosaur,‭ ‬although new discoveries in the future may take this epithet away from Guanlong.‭ ‬The discovery of Guanlong lends support to the theory that the early origins of the tyrannosaurs can be traced back to Asia.‭ ‬From here fossil evidence from the discovery of Stokesosaurus indicates that they primarily radiated towards North America,‭ ‬although it‭’‬s possible that they also spread in the opposite direction to Europe.\r\n       One thing that Guanlong is arguably more famous for is its elaborate head crest,‭ ‬the inspiration for Guanlong\'s name‭ \'‬crown lizard‭\'‬.‭ ‬This crest rose up from the snout between the nostrils and eyes and curved over in an arc above the back of the skull.‭ ‬Study of the crests has revealed that they were very fragile,‭ ‬confirming the notion that they were only for display.‭ ‬As such the crests were probably a different colour to the rest of the body, and may have increased in colour intensity as Guanlong reached breeding condition'),
(54, 2, 2, 2, 'Apatosaurus', 25000, 7, 23, 13, 1, 'apatosaurus.jpg', ' Even though Apatosaurus is one of the sauropod dinosaurs best known to palaeontology yet most people confused it with Brontosaurus.‭ ‬The reason for this goes all the way back to‭ ‬1879,‭ ‬roughly two years after the naming of Apatosaurus ajax when a new sauropod specimen was given the name Brontosaurus excelsus by Othniel Charles Marsh,‭ ‬the same person who named Apatosaurus earlier in‭ ‬1877.‭ ‬This specimen was in a better state of preservation than the earlier Apatosaurus and also clearly had several notable differences which led Marsh to the conclusion that it was a similar but altogether different genus.\r\n       No one put much more thought into further classifying the two genera until‭ ‬1903‭ ‬when Elmer S.‭ ‬Riggs studied the fossils.‭ ‬One of the key areas that Riggs is remembered for is his study of sauropods and after reviewing the fossils he found that while Brontosaurus excelsus was different to Apatosaurus ajax,‭ ‬the differences were not great enough to warrant the creation of a new genus.‭ ‬The majority of other palaeontologists in the twentieth century agreed with this conclusion and for that time Brontosaurus has been a junior synonym to Apatosaurus.‭ ‬This follows standard naming procedure where for the exception of very rare and special cases‭ (‬see Tyrannosaurus‭) ‬the name of the first genus created must be used to refer to all subsequent discoveries.‭ ‬In this case Brontosaurus excelsus was renamed Apatosaurus excelsus.'),
(59, 2, 2, 2, 'Brachiosaurus', 35000, 15, 25, 8, 1, 'Brachiosaurus.jpg', ' The sauropod dinosaur Brachiosaurus earned its name from the fact that the arms,‭ ‬or rather the fore legs as it was quadrupedal,‭ ‬are actually longer than the hind legs.‭ ‬The fact that these are longer offers Brachiosaurus a passive advantage in reaching up into the tree canopy to feed as the neck is always arched upwards as a result.‭ ‬Since the skeleton and vertebrae would be angled in such a way,‭ ‬Brachiosaurus would not need extra powerful muscles to lift the head and neck all the way up,‭ ‬reducing the effort to feed in such a specialised way. A further adaptation were the presence of air sacs located along the neck and trunk of Brachiosaurus.‭ ‬These connected to the lungs and had the effect of lowering the body density which in turn would reduce the total weight of the neck and trunk areas.‭ '),
(61, 3, 1, 1, 'Irritator', 1000, 3, 8, 25, 0, 'Irritator.jpg', 'Irritator is proof that palaeontologists do have a sense of humour even if it is a dry one.‭ ‬The holotype specimen of Irritator was a skull that had been artificially elongated by illegal fossil collectors in the hope of increasing its monetary value‭ (‬plainly speaking,‭ ‬to get more money for the fossil‭)‬.‭ ‬Before the skull could be studied and described to science the first job that had to be done was correct the lengthening work,‭ ‬a long and pain staking process that needless to say irritated those involved.‭ ‬The species name I.‭ ‬challengeri is a little less dramatic with the species named after Professor Challenger,‭ ‬a fictional character in the classic Arthur Conan Doyle story The Lost World.‭ ‬For those not already familiar this story it is about an expedition that scales a plateau in the Amazon Basin where they discover dinosaurs and other prehistoric creatures are still alive and well.'),
(72, 3, 1, 4, 'dfsdf', 12, 12, 12, 12, 0, 'dfsdf.jpg', 'sdfvadfv');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210311185915', '2021-03-11 20:00:25', 204),
('DoctrineMigrations\\Version20210311191619', '2021-03-11 20:16:45', 46);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `period`
--

CREATE TABLE `period` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `period`
--

INSERT INTO `period` (`id`, `name`) VALUES
(1, 'Triassic'),
(2, 'Jurassic'),
(3, 'Cretaceous');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `name`, `lastname`, `birth_date`) VALUES
(1, 'mark@mail.com', '[\"ROLE_ADMIN\"]', '$argon2id$v=19$m=65536,t=4,p=1$txrXchQ/mfjZNfRuZ85PmQ$TvFeyLKrdGPHawq20ZboCORK7aIdRn87MzjO2ienKA0', 'Mark', 'Dorosh', '2016-02-07'),
(2, 'roman@mail.com', '[]', '$argon2id$v=19$m=65536,t=4,p=1$txrXchQ/mfjZNfRuZ85PmQ$TvFeyLKrdGPHawq20ZboCORK7aIdRn87MzjO2ienKA0', 'Roman', 'Dorosh', '1989-02-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_dinosaur`
--

CREATE TABLE `user_dinosaur` (
  `user_id` int NOT NULL,
  `dinosaur_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `continent`
--
ALTER TABLE `continent`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `diet`
--
ALTER TABLE `diet`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `dinosaur`
--
ALTER TABLE `dinosaur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_DAEDC56EEC8B7ADE` (`period_id`),
  ADD KEY `IDX_DAEDC56EE1E13ACE` (`diet_id`),
  ADD KEY `IDX_DAEDC56E921F4C77` (`continent_id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `period`
--
ALTER TABLE `period`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- Indices de la tabla `user_dinosaur`
--
ALTER TABLE `user_dinosaur`
  ADD PRIMARY KEY (`user_id`,`dinosaur_id`),
  ADD KEY `IDX_3A60216EA76ED395` (`user_id`),
  ADD KEY `IDX_3A60216E4C3E9E0E` (`dinosaur_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `continent`
--
ALTER TABLE `continent`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `diet`
--
ALTER TABLE `diet`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `dinosaur`
--
ALTER TABLE `dinosaur`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `period`
--
ALTER TABLE `period`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dinosaur`
--
ALTER TABLE `dinosaur`
  ADD CONSTRAINT `FK_DAEDC56E921F4C77` FOREIGN KEY (`continent_id`) REFERENCES `continent` (`id`),
  ADD CONSTRAINT `FK_DAEDC56EE1E13ACE` FOREIGN KEY (`diet_id`) REFERENCES `diet` (`id`),
  ADD CONSTRAINT `FK_DAEDC56EEC8B7ADE` FOREIGN KEY (`period_id`) REFERENCES `period` (`id`);

--
-- Filtros para la tabla `user_dinosaur`
--
ALTER TABLE `user_dinosaur`
  ADD CONSTRAINT `FK_3A60216E4C3E9E0E` FOREIGN KEY (`dinosaur_id`) REFERENCES `dinosaur` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_3A60216EA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
