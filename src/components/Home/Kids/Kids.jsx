import Aos from 'aos';
import React, { useEffect } from 'react';

const Kids = () => {
    useEffect(() => {
        Aos.init({
            delay: 300,
            duration: 600

        });
      }, []);
      
    return (
        <div className='mt-12'> 
            <h2 className='text-center text-4xl font-semibold my-8'>Kids Galary</h2>
            <div className='grid grid-cols-3'>
                <img src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9334.jpg?w=1060&t=st=1684673591~exp=1684674191~hmac=b3e30342893408bac4debbdb3d22fd00889d68297e410fdfd96461a05dc07f06" alt="" data-aos="flip-right" />
                <img src="https://img.freepik.com/free-photo/boy-girl-home-playing-with-toys-together_23-2148630635.jpg?w=1060&t=st=1684673866~exp=1684674466~hmac=0c2309610773c3f280f0d98bc46c24f969022c3d488bb1345deeb3c73f6ea353" alt="" data-aos="flip-right" />
                <img src="https://img.freepik.com/free-photo/close-up-child-playing-her-room_23-2149208189.jpg?w=1060&t=st=1684673893~exp=1684674493~hmac=a8d638b6371b9010a5326a6a180f9a46fd309169bad1a061a4004250709c6cdc" alt="" data-aos="flip-right" />
                <img src="https://img.freepik.com/free-vector/happy-children-playing-toy-white-background_1308-94725.jpg?w=1060&t=st=1684673976~exp=1684674576~hmac=2bcdd5b3a18a0fb8751eef982b562e42a1b70d6a21c6f1865a52876ff86534b4" alt="" data-aos="flip-right" />
                <img src="https://img.freepik.com/free-photo/little-boy-playing-doctor-with-teddy-bear_1150-15584.jpg?w=1060&t=st=1684674034~exp=1684674634~hmac=76d663531d960488236d4e0be716b03fbeaf2db4f02bb2af9e491ec8284d0d68" alt="" data-aos="flip-right" />
                <img src="https://img.freepik.com/free-photo/close-up-kid-playing-with-educational-toy_23-2149319690.jpg?w=1060&t=st=1684674078~exp=1684674678~hmac=7b20c6cf188261884240350ab0b5538c8eeda6847393f2f3a0e948a03aa2af7a" alt="" data-aos="flip-right" />
                <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382688.jpg?w=1060&t=st=1684674123~exp=1684674723~hmac=18842d4a37fde430692df44524231795f82c163c3709242ac2c954c3a75436fb" alt="" data-aos="flip-right" />

                <img src="https://img.freepik.com/free-photo/full-shot-boy-playing-home_23-2150286171.jpg?w=1060&t=st=1684674166~exp=1684674766~hmac=7aaf4de8d4f356b65d6845a78ac8dd8cbe56ffe4e50ab3025cbfe7cdccd14182" alt="" data-aos="flip-right" />

                <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382694.jpg?w=1060&t=st=1684674175~exp=1684674775~hmac=be6b4a62e524d692d501e0f6fb3a4ddd24162c10e65894117ef8d167948e37ef" alt="" data-aos="flip-right" />



            </div>
           <div data-aos="fade-up">Hello, World!</div>
        </div>
    );
};

export default Kids;