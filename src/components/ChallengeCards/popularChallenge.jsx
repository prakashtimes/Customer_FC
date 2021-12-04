import styles from './index.module.scss';
import React from 'react';
import ChallengeCards from './index'
import {challengeCardsData} from '../../constant'


export default function PopularChallenges() {
    
      
    return (
        <>
        <span style={{fontFamily: 'Montserrat',float:'left', fontSize: '22px', fontWeight:'bold', margin: 'auto 50px'}}>Popular Challenges</span> 
        <div className={styles.arrangeCards}>
            <div className={styles.arrange}>
            
            {challengeCardsData?.map((data, index) => {
                return <div style={{display: 'inline-block', padding: '10px'}}><ChallengeCards data={data} index={index} key={data.id} /> </div>;
            })}
        
            </div>
        </div>
        </>
    )
}