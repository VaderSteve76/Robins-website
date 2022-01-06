import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from 'swiper';
import * as S from './HomeStyles';
import '../../styles.css';

SwiperCore.use([Navigation]);

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <S.IMG></S.IMG>
        <S.NAV>
          <S.DIV>
            <a href='/home'>Home</a>
            <a href=''>Contact Us</a>
            <a href=''>About Us</a>
            <a href=''>Before You Visit</a>
            <a href='/faq'>FAQ</a>
            <a href=''>Parents</a>
            <a href=''>Available Puppies</a>
          </S.DIV>
          <S.DIV>
            <a href=''>Training/Grooming</a>
            <a href=''>Health Guarantee</a>
            <a href=''>Early Neuro Stimulation</a>
            <a href=''>Deposit/Delivery</a>
            <a href=''>Supply List/Product Links</a>
          </S.DIV>
        </S.NAV>
        <S.SwipeDiv>
          <Swiper navigation={true} className="mySwiper">
            <SwiperSlide>
              Welcome to Big Doodle Dreams. I am a very small scale breeder 
              where my dogs are part of my family and live with us in the 
              home. All puppies are raised under foot with constant love 
              and affection from everyone in the house. It all started with 
              one dog, Max, a beautiful parti colored aussiedoodle. We had 
              been looking for a service dog for our children, but we quickly 
              found out that companies/agencies that train dogs would not train 
              a dog for us due to the dynamics of our family. I have three sons, 
              all of them are on the autism spectrum and have different needs. 
              Our oldest son was born at 27 weeks and is the most impacted by 
              autism. With hard work and dedication he is presently functioning 
              at his age/grade level with minimal issues. His biggest problem is 
              anxiety caused by a change to his routine/schedule. Our middle son 
              was born full term with minimal problems. He was completely on target 
              and then everything changed, he went from complete sentences to 
              screaming with no speech. Again with dedication and determination 
              we were able to pull him out of it. He has epilepsy which is controlled
              by medication. He is in the aspergers range with mathematical and 
              nonverbal reasoning skills being his strongest areas. He is our 
              little Einstein. Our youngest seems to be the least impacted, but at this point we 
              are very good at providing interventions to decrease the impact of 
              autism.  
            </SwiperSlide>
            <SwiperSlide>
              He has a few moments every day where his autism is visible, 
              but overall he is doing very well. I can credit our success to my 
              education and experience.
              Ironically I am a special education teacher 
              and had been teaching for four years prior to having children. I have 
              my B.S. and M.A. from the University of South Florida and I have my Ed.S. 
              from Lincoln Memorial University. All of my degrees are in the area of 
              special education. So how and why did we pursue a service dog? The main 
              goal that we had for the service dog was to distract our oldest son when 
              anxiety became an issue. We also wanted to have our two oldest sons hold 
              the harness and leash when out at a store. Stores are difficult places for 
              them, it is noisy with many lights, and people. Max has been successful at 
              filling both of these needs. We had spent many hours searching for a 
              service dog and tried to go through a service dog company. We found that 
              service dog companies will train a dog for only one person and with our 
              needs being greater than that we were quickly eliminated. I had previously 
              trained a dog many years ago for therapy work, a standard poodle named Sam. 
              So we began our search for a dog that I could train. We had washed out four 
              (different breeds) dogs before finally getting Max. 
            </SwiperSlide>
            <SwiperSlide>
              Max came from a breeder that only breeds aussiedoodles and she frequently 
              retires dogs and donates them to a service dog training company. Max's father 
              was donated and trained for service work. Max's mother is retired and lives 
              with a great family in the lap of luxury. Max has done so well, he was very 
              easily trained. Housebroken in the first day and began his outings at the end 
              of the first week. I was able to teach him sit, down, stay, and come in less 
              than one hour. The "watch me" command took a little more time, but with the 
              clicker and treats he responded quickly. We wanted him to have a playmate, so 
              we started looking. We went with a standard poodle, Maggie. She came from a 
              small breeder and I had asked for the litter to be temperament tested prior to 
              making my choice. She was it and we couldn't be happier. So why breed? Well, 
              we weren't intending on breeding, but it seemed a shame to have found the most 
              perfect dogs and not be able to share. We are still able to have Max work. So 
              far there has been no change in his abilities due to him being intact (not neutered). 
              However, when and if that does change we will have to neuter him. We are planning 
              on keeping a puppy from a litter so that his legacy can continue.
            </SwiperSlide>
          </Swiper>
        </S.SwipeDiv>
      </div>
    )
  }
}