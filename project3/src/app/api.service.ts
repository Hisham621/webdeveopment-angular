import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  states= [
    {
      "id": 1,
      "name": "Andhra Pradesh",
      "description": "Andhra Pradesh is located in the southeastern coastal region of India. Known for its rich culture and heritage.",
      "image_url": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/andhra-famous.jpg"
    },
    {
      "id": 2,
      "name": "Arunachal Pradesh",
      "description": "Arunachal Pradesh is in the northeastern part of India. It is known for its mountainous terrain and biodiversity.",
      "image_url": "https://th.bing.com/th/id/OIP.1vzrbR4yXmutpA_QplZkXQHaHa?w=540&h=540&rs=1&pid=ImgDetMain"
    },
    {
      "id": 3,
      "name": "Assam",
      "description": "Assam is located in the northeastern region of India, famous for its tea gardens and the Kaziranga National Park.",
      "image_url": "https://th.bing.com/th/id/OIP.ndN--4HPeWgH1cNDvZSIoQAAAA?rs=1&pid=ImgDetMain"
    },
    {
      "id": 4,
      "name": "Bihar",
      "description": "Bihar, located in eastern India, is known for its historical significance and the ancient Nalanda University.",
      "image_url": "https://live.staticflickr.com/2588/3992651083_6faa6c89ff_b.jpg"
    },
    {
      "id": 5,
      "name": "Chhattisgarh",
      "description": "Chhattisgarh is known for its forests, waterfalls, and tribal culture, located in central India.",
      "image_url": "https://www.theeraulaa.in/wp-content/uploads/2020/11/IMG_8060-768x1024.jpg"
    },
    {
      "id": 6,
      "name": "Goa",
      "description": "Goa is located on the western coast of India, famous for its beaches, Portuguese heritage, and vibrant nightlife.",
      "image_url": "https://th.bing.com/th/id/OIP.gwClII_hIf6odcT9pyr2KwHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain"
    },
    {
      "id": 7,
      "name": "Gujarat",
      "description": "Gujarat is known for its rich history, the Rann of Kutch, and its prominent role in India's independence movement.",
      "image_url": "https://thepointsguy.global.ssl.fastly.net/us/originals/2021/11/montegobay.jpg?width=1920"
    },
    {
      "id": 8,
      "name": "Haryana",
      "description": "Haryana is located in northern India, known for its agricultural industry and proximity to New Delhi.",
      "image_url": "https://th.bing.com/th/id/OIP.9EZgniLiLL2joOsB5nOy0gHaJr?w=1101&h=1440&rs=1&pid=ImgDetMain"
    },
    {
      "id": 9,
      "name": "Himachal Pradesh",
      "description": "Himachal Pradesh is a northern state known for its beautiful mountain ranges, hill stations, and temples.",
      "image_url": "https://images.pexels.com/photos/11538476/pexels-photo-11538476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 10,
      "name": "Jharkhand",
      "description": "Jharkhand, located in eastern India, is known for its rich mineral resources and scenic forests.",
      "image_url": "https://th.bing.com/th/id/OIP.ZJrxjXu6ZtsYAUUqX4n8JwHaLH?rs=1&pid=ImgDetMain"
    },
    {
      "id": 11,
      "name": "Karnataka",
      "description": "Karnataka is a southwestern state famous for its historic monuments, gardens, and the tech hub of Bengaluru.",
      "image_url": "https://w0.peakpx.com/wallpaper/447/661/HD-wallpaper-mysore-palace-karnataka.jpg"
    },
    {
      "id": 12,
      "name": "Kerala",
      "description": "Kerala, located in the south of India, is known for its backwaters, beaches, and Ayurvedic treatments.",
      "image_url": "https://wallpaperaccess.com/full/1635218.jpg"
    },
    {
      "id": 13,
      "name": "Madhya Pradesh",
      "description": "Madhya Pradesh is in central India, home to UNESCO World Heritage sites like the Khajuraho temples and Sanchi Stupa.",
      "image_url": "https://thumbs.dreamstime.com/b/ahilya-maheshwar-madhya-pradesh-india-served-as-capital-great-maratha-temple-inside-fort-lady-rajmata-devi-holkar-ruler-253791017.jpg"
    },
    {
      "id": 14,
      "name": "Maharashtra",
      "description": "Maharashtra, located on the west coast, is known for its bustling metropolis, Mumbai, and rich cultural heritage.",
      "image_url": "https://thumbs.dreamstime.com/b/vertical-image-crowd-front-gateway-india-historical-mumbai-maharashtra-april-th-monument-nice-blue-sky-background-249343520.jpg"
    },
    {
      "id": 15,
      "name": "Manipur",
      "description": "Manipur is a northeastern state known for its lush landscapes and the ancient tradition of Manipuri dance.",
      "image_url": "https://blog.ksom.ac.in/wp-content/uploads/2019/03/ISKCON-Temple-Manipur-LG-G4.jpg"
    },
    {
      "id": 16,
      "name": "Meghalaya",
      "description": "Meghalaya, located in the northeastern hills, is famous for its unique living root bridges and scenic landscapes.",
      "image_url": "https://www.adventurush.com/wp-content/uploads/2022/09/Meghalaya-Destination-shutterstock_13481390841268.jpg"
    },
    {
      "id": 17,
      "name": "Mizoram",
      "description": "Mizoram is in the northeastern part of India, known for its hills, forests, and vibrant tribal culture.",
      "image_url": "https://www.ibef.org/assets/images/states/Mizoram-2.jpg"
    },
    {
      "id": 18,
      "name": "Nagaland",
      "description": "Nagaland, located in the northeastern region, is known for its diverse ethnic groups and beautiful mountain scenery.",
      "image_url": "https://th.bing.com/th/id/OIP.-oT7DqFq_E5Vbziw-OzogQHaHS?rs=1&pid=ImgDetMain"
    },
    {
      "id": 19,
      "name": "Odisha",
      "description": "Odisha, located on the eastern coast, is known for its beaches, temples, and the famous Konark Sun Temple.",
      "image_url": "https://static.punjabkesari.in/multimedia/14_17_47801358484838106.jpg"
    },
    {
      "id": 20,
      "name": "Punjab",
      "description": "Punjab, located in the northern part of India, is known for its vibrant culture, agriculture, and the Golden Temple in Amritsar.",
      "image_url": "https://www.sikhnet.com/files/styles/social-sharing-whatsapp/public/news/image/main/Golden-Temple_0.jpg?itok=Dm5ekf0Q"
    },
    {
      "id": 21,
      "name": "Rajasthan",
      "description": "Rajasthan, located in the northwest, is famous for its deserts, palaces, and historical cities like Jaipur and Udaipur.",
      "image_url": "https://th.bing.com/th/id/OIP.u4-4lk9bHrXCGOa-OmyAlgHaFy?w=1280&h=1000&rs=1&pid=ImgDetMain"
    },
    {
      "id": 22,
      "name": "Sikkim",
      "description": "Sikkim, in the northeastern Himalayas, is known for its stunning landscapes, Buddhist monasteries, and the Kanchenjunga peak.",
      "image_url": "https://guide4info.com/wp-content/uploads/2021/11/PLACES-TO-VISIT-IN-SIKKIM-Ravangla.jpg"
    },
    {
      "id": 23,
      "name": "Tamil Nadu",
      "description": "Tamil Nadu, located in the southern part of India, is famous for its temples, classical music, and beautiful beaches.",
      "image_url": "https://www.adotrip.com/public/images/city/large_thumb/5c3dc63575dcd-Khajuraho%20Place%20to%20visit.jpg"
    },
    {
      "id": 24,
      "name": "Telangana",
      "description": "Telangana, located in southern India, is known for its rich history, the city of Hyderabad, and its technological growth.",
      "image_url": "https://th.bing.com/th/id/OIP.72_lE9k9QWWeM178eizsCwAAAA?rs=1&pid=ImgDetMain"
    },
    {
      "id": 25,
      "name": "Tripura",
      "description": "Tripura, located in the northeastern region, is known for its royal palaces and lush green landscapes.",
      "image_url": "https://www.nativeplanet.com/img/2017/10/6-05-1507180734.jpg"
    },
    {
      "id": 26,
      "name": "Uttar Pradesh",
      "description": "Uttar Pradesh, in the northern part of India, is known for its historical significance, including the Taj Mahal and Varanasi.",
      "image_url": "https://www.jonesaroundtheworld.com/wp-content/uploads/2022/01/India-Gate-New-Delhi-India-Landmak.jpg"
    },
    {
      "id": 27,
      "name": "Uttarakhand",
      "description": "Uttarakhand, located in the northern part of India, is famous for its hill stations, temples, and the Himalayas.",
      "image_url": "https://i.pinimg.com/originals/69/e5/3a/69e53ad957c2a95ac339bf8679eca6a9.jpg"
    },
    {
      "id": 28,
      "name": "West Bengal",
      "description": "West Bengal, located in the eastern part of India, is known for its cultural heritage, Kolkata city, and the Sundarbans.",
      "image_url": "https://th.bing.com/th/id/OIP.6tGxl5H0EI7JKGeGwsNKSwHaJ4?rs=1&pid=ImgDetMain"
    }
  ]
  // id:any
  constructor() { }
  getStates()
  {
    return this.states;
  }
  getStatesByID(id:any)
  {
    return this.states.find(state=>state.id==id);
  }

}
