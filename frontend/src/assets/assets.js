import basket from './basket.png'
import shettyslogo from "./shettys-kitchen-logo.png"
import search_icon from './search-icon.png'
import header1 from "./header1.png"
import Chicken_Ghee_Roast from "./Chicken-Ghee-Roast.png"
import Chicken_kabab_Green_Masala from "./Chicken-kabab-Green-Masala.png"
import Egg_Biryani from "./Egg-Biryani.png"
import Egg_Kolhapuri from "./Egg-Kolhapuri.png"
import fish from "./fish.png"
import Kaju_Masala from "./Kaju-Masala.png"
import Kerala_Appam from "./Kerala-Appam.png"
import kerla_Parotta from "./kerla-Parotta.png"
import Kori_Sukka from "./Kori-Sukka.png"
import Malabar_Chicken_Biryani from "./Malabar-Chicken-Biryani.png"
import Mix_Veg from "./Mix-Veg.png"
import Paneer_Butter_Masala from "./Paneer-Butter-Masala.png"
import veg_thali from "./veg-thali.png"
import cold_drinks from "./cold-drinks.png"
import Chicken_65 from "./Chicken-65.png"
import chicken_lollypop from "./chicken-lollypop.png"
import Chicken_Butter_Masala from "./Chicken-Butter-Masala.png"
import Chicken_Hyderabadi from "./Chicken-Hyderabadi.png"
import Non_veg_Thali from "./non-veg-thali.png"
import rating from "./rating.png"
import add from "./add.png"
import add_green from "./add_green.png"
import remove_red from "./remove_red.png"


export const assets = {
    shettyslogo,
    basket,
    search_icon,
    header1,
	rating,
	add,
	add_green,
	remove_red
}


export const menu_list = [
	{
		menu_name :"Non Veg Starters",
		menu_image:Chicken_Ghee_Roast
	},

	{
		menu_name :"Non veg Main Course",
		menu_image:Egg_Kolhapuri
	},
	{
		menu_name :"Fish",
		menu_image:fish
	},
	{
		menu_name :"Veg Main Course",
		menu_image:Kaju_Masala
	},
	{
		menu_name :"Kerala Special",
		menu_image:Kerala_Appam
	},
	
	{
		menu_name :"Biryani",
		menu_image:Malabar_Chicken_Biryani
	},
	
	
	{
		menu_name :"Thali Combo",
		menu_image:veg_thali
	},
	{
		menu_name :"Beverages",
		menu_image:cold_drinks
	},
]


export const food_list = [
	{
		_id:"1",
		name:"Paneer Butter Masala",
		image:Paneer_Butter_Masala,
		price:180,
		description:"Delecious panner butter masala",
		category:"Veg Main Course"
	},
	{
		_id:"2",
		name:"Mix Veg",
		image:Mix_Veg,
		price:130,
		description:"Delecious Mix veg",
		category:"Veg Main Course"
	},
	{
		_id:"3",
		name:"Kaju Masala",
		image:Kaju_Masala,
		price:200,
		description:"Delecious kaju masala",
		category:"Veg Main Course"
	},
	{
		_id:"4",
		name:"Kerala Appam",
		image:Kerala_Appam,
		price:180,
		description:"Delecious special kerala appam",
		category:"Kerala Special"
	},
	{
		_id:"5",
		name:"Kerla Parotta",
		image:kerla_Parotta,
		price:200,
		description:"Delecious Kerala Parotta",
		category:"Kerala Special"
	},
	{
		_id:"6",
		name:"Kori Sukka",
		image:Kori_Sukka,
		price:180,
		description:"Delecious Kori Sukka",
		category:"Kerala Special"
	},
	{
		_id:"7",
		name:"Chicken 65",
		image:Chicken_65,
		price:180,
		description:"Delecious Chicken 65",
		category:"Non Veg Starters"
	},
	{
		_id:"8",
		name:"Chicken kabab Green Masala",
		image:Chicken_kabab_Green_Masala,
		price:190,
		description:"Delecious Chicken_kabab_Green_Masala",
		category:"Non Veg Starters"
	},
	{
		_id:"9",
		name:"chicken-lollypop",
		image:chicken_lollypop,
		price:190,
		description:"Delecious chicken-lollypop",
		category:"Non Veg Starters"
	},
	{
		_id:"10",
		name:"Egg Biriyani",
		image:Egg_Biryani,
		price:150,
		description:"Delecious Egg Biriyani",
		category:"Biriyani"
	},
	{
		_id:"11",
		name:"Malabar Chicken Biryani",
		image:Malabar_Chicken_Biryani,
		price:200,
		description:"Delecious Malabar Chicken Biryani",
		category:"Biriyani"
	},
	{
		_id:"12",
		name:"Ambur Chicken Biryani",
		image:Malabar_Chicken_Biryani,
		price:250,
		description:"Delecious Chicken Biryani",
		category:"Biriyani"
	},
	{
		_id:"13",
		name:"Egg Kolhapuri",
		image:Egg_Kolhapuri,
		price:130,
		description:"Delecious Egg Kolhapuri",
		category:"Non veg Main Course"
	},
	{
		_id:"14",
		name:"Chicken Butter Masala",
		image:Chicken_Butter_Masala,
		price:230,
		description:"Delecious Chicken Butter Masala",
		category:"Non veg Main Course"
	},
	{
		_id:"15",
		name:"Chicken Hyderabadi",
		image:Chicken_Hyderabadi,
		price:199,
		description:"Delecious Chicken Hyderabadi",
		category:"Non veg Main Course"
	},
	{
		_id:"16",
		name:"Veg Thali",
		image:veg_thali,
		price:119,
		description:"Delecious ",
		category:"Thali Combo"
	},
	{
		_id:"17",
		name:"Non veg Thali",
		image:Non_veg_Thali,
		price:159,
		description:"Delecious ",
		category:"Thali Combo"
	},
	{
		_id:"18",
		name:"Fish Thali",
		image:fish,
		price:139,
		description:"Delecious Fish Thali",
		category:"Thali Combo"
	},
]