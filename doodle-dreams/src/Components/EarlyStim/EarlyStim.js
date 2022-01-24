import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from './EarlyStimStyles';
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

export default class EarlyStim extends Component {
  render() {
    return (
      <>
        <h1 className="early" >Early Neurological Stimulation</h1>
          <S.SwipeDiv>
            <Swiper navigation={true} className="mySwiper">
              <SwiperSlide>
              Newborn pups are uniquely different from adults in several respects. 
              When born, their eyes are closed and their digestive system has a 
              limited capacity requiring periodic stimulation by their dam who 
              routinely licks them in order to promote digestion. At this age 
              they are only able to smell, suck, and crawl. Body temperature is 
              maintained by snuggling close to their mother or by crawling into 
              piles with other littermates. During these first few weeks of 
              immobility, researchers noted that these immature and under-developed 
              canines are sensitive to a restricted class of stimuli which includes 
              thermal and tactile stimulation, motion and locomotion.
              The U.S. Military in their canine program developed a method that still
              serves as a guide to what works. In an effort to improve the performance of
              dogs used for military purposes, a program called "Bio Sensor" was
              developed. Later, it became known to the public as the "Super Dog" Program.
              Based on years of research, the military learned that early neurological
              stimulation exercises could have important and lasting effects. Their studies
              confirmed that there are specific time periods early in life when neurological
              stimulation has optimum results. The first period involves a window of time
              that begins at the third day of life and lasts until the sixteenth day. It is
              believed that because this interval of time is a period of rapid neurological
              growth and development, and therefore is of great importance to the individual.
              </SwiperSlide>
              <SwiperSlide>
              The "Bio Sensor" program was also concerned with early neurological stimulation 
              in order to give the dog a superior advantage. Its development utilized six 
              exercises which were designed to stimulate the neurological system. Each workout 
              involved handling puppies once each day. The workouts required handling them one 
              at a time while performing a series of five exercises. Listed in order of preference, 
              the handler starts with one pup and stimulates it using each of the five exercises. 
              The handler completes the series from beginning to end before starting with the next 
              pup. The handling of each pup once per day involves the following exercises:
              1. Tactical stimulation (between toes)
              2. Head held erect
              3. Head pointed down
              4. Supine position
              5. Thermal stimulation.
              </SwiperSlide>
              <SwiperSlide>
              1. Tactile stimulation - holding the pup in one hand, the handler gently stimulates 
              (tickles) the pup between the toes on any one foot using a Q-tip. It is not necessary 
              to see that the pup is feeling the tickle. Time of stimulation 3 - 5 seconds.
              <br />
              2. Head held erect - using both hands, the pup is held perpendicular to the ground, 
              (straight up), so that its head is directly above its tail. This is an upwards position. 
              Time of stimulation 3 - 5 seconds
              <br />
              3. Head pointed down - holding the pup firmly with both hands the head is reversed and 
              is pointed downward so that it is pointing towards the ground. Time of stimulation 
              3 - 5 seconds
              <br />
              4. Supine position - hold the pup so that its back is resting in the palm of both 
              hands with its muzzle facing the ceiling. The pup while on its back is allowed to 
              sleep. Time of stimulation 3-5 seconds
              <br />
              5. Thermal stimulation—use a damp towel that has been cooled in a refrigerator for 
              at least five minutes. Place the pup on the towel, feet down. Do not restrain it 
              from moving. Time of stimulation 3-5 seconds
              </SwiperSlide>
              <SwiperSlide>
              Five benefits have been observed in canines that were exposed to the Bio Sensor 
              stimulation exercises. The benefits noted were:
              <br />
              1. Improved cardio vascular performance (heart rate)
              <br />
              2. Stronger heart beats,
              <br />
              3. Stronger adrenal glands,
              <br />
              4. More tolerance to stress, and
              <br />
              5. Greater resistance to disease.
              </SwiperSlide>
              <SwiperSlide>
              In tests of learning, stimulated pups were found to be more active and were more 
              exploratory than their non- stimulated littermates over which they were dominant 
              in competitive situations. Secondary effects were also noted regarding test performance. 
              In simple problem solving tests using detours in a maze, the non-stimulated pups became 
              extremely aroused, whined a great deal, and made many errors. Their stimulated 
              littermates were less disturbed or upset by test conditions and when comparisons 
              were made, the stimulated littermates were more calm in the test environment, made 
              fewer errors and gave only an occasional distress sound when stressed.
              </SwiperSlide>
            </Swiper>
          </S.SwipeDiv>
        </>
    );
  }
};