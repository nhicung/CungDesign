import React from 'react';
import { CarouselHandler } from './Carousel';
import { BreakLine } from './LineBreak'
import  {Feature}  from './Feature'
import  Collection from './Collection'

export const Home = (props) => (
    <div>
        <BreakLine w="100%" />
        <CarouselHandler></CarouselHandler>
        <Feature></Feature>
        <div className="collection">
            <h1>Our Collection</h1>
            <BreakLine w="50%" />
            <Collection/>
        </div>
        {/* <Footer></Footer>  */}
    </div>
)