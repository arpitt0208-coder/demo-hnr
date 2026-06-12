import type { StaticImageData } from "next/image";

import atalTunnel from "./Atal-Tunnel.jpeg";
import barotValley from "./barotvalley.jpeg";
import bhagsuWaterfall from "./bhagsuwaterfall.jpeg";
import bijliMahadev from "./Bijli-Mahadev.png";
import cafeManali from "./cafemanali.jpeg";
import cafeBir from "./cafebir.jpeg";
import chandraRiver from "./Chandra-River.jpeg";
import chandratalLake from "./chandratal-lake.jpeg";
import darcha from "./Darcha.jpeg";
import dhankar from "./dhankar.jpeg";
import dharamshala from "./Dharamshala.jpeg";
import downtown from "./downtown.png";
import glider from "./glider.jpeg";
import gulaba from "./Gulaba.jpeg";
import hadimbaTemple from "./hidimba-temple-manali.jpeg";
import hikkim from "./hikkim.jpeg";
import himalayanNational from "./Himalayn_National.jpeg";
import khardungLa from "./khardung-la-pass-in-ladakh.jpeg";
import keylongWest from "./Keylong_West.jpeg";
import keyMonastery from "./keymonastery.jpeg";
import langza from "./langza.jpeg";
import magneticHillLeh from "./Magnetic_Hill,_Leh.jpeg";
import malanaVillage from "./malana-village.jpeg";
import manaliView from "./Manali-view.jpeg";
import manikaran from "./manikarn.jpeg";
import mcLeodGanj from "./mecloudganj.jpeg";
import nayagaon from "./nayagaon.jpeg";
import nehruKund from "./Nehru-Kund.jpeg";
import oldManaliTown from "./Old-Manali-Town.jpeg";
import paraglidingSite from "./Paragliding-Site.jpeg";
import placesToVisit from "./Places-to-Visit.jpeg";
import pugaLadakh from "./Puga-Ladakh.jpeg";
import rohtangPass from "./Rohtang-Pass.png";
import rohtangRide from "./A-Ride-to-Rohtang-Pass.jpeg";
import rohtangRideThrill from "./A-Ride-to-Rohtang-Pass-Thrill.jpeg";
import roparWetlands from "./roparwetlands.jpeg";
import shantiStupa from "./Shanti-Stupa-Leh-Ladakh.jpeg";
import sissuLake from "./sissu-lake.jpeg";
import skiSlopesSolang from "./ski-slopes-solang-valley.png";
import solangValley from "./solang-valley.jpeg";
import sukhnaLake from "./sukhnalake.jpeg";
import tabo from "./tabo.jpeg";
import teaGarden from "./teagarden.jpeg";
import thikseyMonastery from "./Thiksey-monastery.jpeg";
import tibetColony from "./tibetcolony.jpeg";
import tibetColonyBir from "./tibetcolonybir.jpeg";
import tirthanValley from "./Tirthan-Valley.jpeg";
import triund from "./triund.jpeg";
import zorbing from "./Zorbing.jpeg";
import kasol from "../kasol.jpeg";
import peaceMonastery from "./peacemonastry.jpeg";
import cableCar from "./cablecar.jpeg";

export type LocationGalleryAsset = {
  src: StaticImageData;
  alt: string;
};

export const manaliGalleryImages: LocationGalleryAsset[] = [
  { src: manaliView, alt: "Panoramic view of Manali valley and snow-capped peaks" },
  { src: oldManaliTown, alt: "Old Manali town with cafes and mountain backdrop" },
  { src: hadimbaTemple, alt: "Hadimba Devi Temple surrounded by cedar forest" },
  { src: cafeManali, alt: "Cafes and streets in Manali town" },
  { src: nehruKund, alt: "Nehru Kund mountain spring near Manali" },
  { src: gulaba, alt: "Gulaba meadows with Himalayan views near Manali" },
  { src: atalTunnel, alt: "Atal Tunnel on the Manali–Leh highway" },
  { src: bhagsuWaterfall, alt: "Bhagsu Waterfall near McLeod Ganj and Manali" },
];

export const kulluValleyGalleryImages: LocationGalleryAsset[] = [
  { src: tirthanValley, alt: "Tirthan Valley terraced hills and river views" },
  { src: chandraRiver, alt: "Chandra River winding through the valley" },
  { src: barotValley, alt: "Barot Valley green hills and pine forests" },
  { src: bijliMahadev, alt: "Bijli Mahadev temple overlooking Kullu Valley" },
  { src: malanaVillage, alt: "Malana village in Parvati Valley" },
  { src: manikaran, alt: "Manikaran hot springs and riverside scenery" },
  { src: himalayanNational, alt: "Great Himalayan National Park landscapes" },
  { src: kasol, alt: "Kasol town with Parvati Valley mountain views" },
];

export const lehLadakhGalleryImages: LocationGalleryAsset[] = [
  { src: shantiStupa, alt: "Shanti Stupa overlooking Leh town at sunset" },
  { src: thikseyMonastery, alt: "Thiksey Monastery perched on a hill in Ladakh" },
  { src: magneticHillLeh, alt: "Magnetic Hill optical illusion road near Leh" },
  { src: khardungLa, alt: "Khardung La pass — one of the highest motorable roads" },
  { src: pugaLadakh, alt: "Puga Valley geothermal landscape in Ladakh" },
  { src: keylongWest, alt: "Keylong town on the Manali–Leh highway" },
  { src: chandratalLake, alt: "Chandratal Lake high-altitude moon lake" },
  { src: darcha, alt: "Darcha village en route to Ladakh" },
];

export const rohtangPassGalleryImages: LocationGalleryAsset[] = [
  { src: rohtangPass, alt: "Rohtang Pass snow-covered mountain road" },
  { src: rohtangRide, alt: "Bike ride through Rohtang Pass snowfields" },
  { src: rohtangRideThrill, alt: "Adventure ride on Rohtang Pass mountain trail" },
  { src: placesToVisit, alt: "Scenic viewpoints along Rohtang Pass" },
  { src: skiSlopesSolang, alt: "Snow slopes visible from the Rohtang route" },
];

export const sissuValleyGalleryImages: LocationGalleryAsset[] = [
  { src: sissuLake, alt: "Sissu Lake and waterfall in Lahaul Valley" },
  { src: atalTunnel, alt: "Atal Tunnel southern portal near Sissu" },
  { src: chandraRiver, alt: "Chandra River flowing through Sissu Valley" },
  { src: keylongWest, alt: "Mountain scenery along the Sissu–Keylong stretch" },
];

export const solangValleyGalleryImages: LocationGalleryAsset[] = [
  { src: solangValley, alt: "Solang Valley meadows and adventure hub near Manali" },
  { src: skiSlopesSolang, alt: "Ski slopes and snow activities in Solang Valley" },
  { src: zorbing, alt: "Zorbing adventure activity in Solang Valley" },
  { src: paraglidingSite, alt: "Paragliding take-off site with valley views" },
];

export const spitiValleyGalleryImages: LocationGalleryAsset[] = [
  { src: dhankar, alt: "Dhankar Monastery on a cliff in Spiti Valley" },
  { src: keyMonastery, alt: "Key Monastery overlooking Spiti River" },
  { src: langza, alt: "Langza village with Buddha statue and peaks" },
  { src: hikkim, alt: "Hikkim village — home to the world's highest post office" },
  { src: tabo, alt: "Tabo Monastery ancient murals in Spiti" },
  { src: darcha, alt: "Darcha gateway toward Spiti and Ladakh" },
  { src: chandratalLake, alt: "Chandratal Lake on the Spiti circuit" },
  { src: peaceMonastery, alt: "Peaceful monastery setting in the high Himalayas" },
];

export const mohaliGalleryImages: LocationGalleryAsset[] = [
  { src: sukhnaLake, alt: "Sukhna Lake near Chandigarh and Mohali" },
  { src: downtown, alt: "Downtown Mohali cityscape and urban roads" },
  { src: nayagaon, alt: "Nayagaon hills near Chandigarh and Mohali" },
  { src: roparWetlands, alt: "Ropar wetlands and lakeside scenery" },
];

export const birBillingGalleryImages: LocationGalleryAsset[] = [
  { src: glider, alt: "Paragliders soaring over Bir Billing" },
  { src: teaGarden, alt: "Tea gardens in the Bir Billing region" },
  { src: cafeBir, alt: "Cafes and village life in Bir" },
  { src: tibetColonyBir, alt: "Tibetan colony streets in Bir Billing" },
  { src: paraglidingSite, alt: "Paragliding launch site at Bir Billing" },
];

export const dharamshalaGalleryImages: LocationGalleryAsset[] = [
  { src: dharamshala, alt: "Dharamshala town nestled in the Dhauladhar range" },
  { src: triund, alt: "Triund trek meadow with mountain panorama" },
  { src: mcLeodGanj, alt: "McLeod Ganj streets and Tibetan culture" },
  { src: peaceMonastery, alt: "Peaceful monastery in Dharamshala hills" },
  { src: tibetColony, alt: "Tibetan colony and cultural landmarks" },
  { src: cableCar, alt: "Cable car ride with Himalayan valley views" },
];

/** Hero / card highlights — reused across gallery accordion, explore, and blog cards. */
export {
  atalTunnel,
  bhagsuWaterfall,
  khardungLa,
  kasol,
  manaliView,
  oldManaliTown,
  rohtangPass,
  rohtangRide,
  rohtangRideThrill,
  shantiStupa,
  keyMonastery,
  malanaVillage,
  skiSlopesSolang,
  tirthanValley,
};
