import React from 'react'
import './header.css'

import {firstNew, leftTopNew, leftBottomNew} from '../../assets';

function Header() {
    return (
        <header>
            <div class="grid-container">
                <a href="./productListing/products.html" class="right_full"><img src={firstNew} alt="" /></a>
                <a href="./productListing/products.html" class="left_top"><img src={leftTopNew} alt="" /></a>
                <a href="./productListing/products.html" class="left_bottom"><img class="left_bottom" src={leftBottomNew} alt="" /></a>
            </div>
        </header>
    )
}

export { Header };