import img1 from './../asset/gachaBannerImg1.png'
import img2 from './../asset/gachaBannerImg2.png'
import img3 from './../asset/gachaBannerImg3.png'
import img4 from './../asset/gachaBannerImg4.png'

import packimg1 from './../asset/StandardPackCover.png'
import packimg2 from './../asset/DeluxePackCover.png'
import packimg3 from './../asset/LabrynthPackCover.png'

export const banner = [
    {name: 'Standard',
    img: img1,
    price: 900,
    type: 'normal',
    packimg: packimg1},
    {name: 'Deluxe',
    img: img2,
    price: 4500,
    type: 'deluxe',
    packimg: packimg2},
    { name: 'Labrynth',
    img: img4,
    price: 1800,
    type: 'waifu',
    packimg: packimg3},
]