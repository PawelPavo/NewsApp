//@ts-nocheck
import * as React from 'react';
import Navbar from '../components/NavBar'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'



const ThePathfinder: React.FC<IThePathfinderProps> = () => {
    //counters
    const [wrong, setWrong] = useState(0)
    const [totalClicks, setTotalCliks] = useState(0)
    const [helpCount, setHelpCount] = useState(0)


// ============== STATE OF COLORS ===================

    //correct color state for correct cells
    const [color4, setColor4] = useState('')
    const [color12, setColor12] = useState('')
    const [color21, setColor21] = useState('')
    const [color29, setColor29] = useState('')
    const [color36, setColor36] = useState('')
    const [color43, setColor43] = useState('')
    const [color52, setColor52] = useState('')
    const [color61, setColor61] = useState('')

    //wrong color state for ALL cells - correct and wrong
    const [wrongColor1, setWrongColor1] = useState('')
    const [wrongColor2, setWrongColor2] = useState('')
    const [wrongColor3, setWrongColor3] = useState('')
    const [wrongColor4, setWrongColor4] = useState('')
    const [wrongColor5, setWrongColor5] = useState('')
    const [wrongColor6, setWrongColor6] = useState('')
    const [wrongColor7, setWrongColor7] = useState('')
    const [wrongColor8, setWrongColor8] = useState('')
    const [wrongColor9, setWrongColor9] = useState('')
    const [wrongColor10, setWrongColor10] = useState('')
    const [wrongColor11, setWrongColor11] = useState('')
    const [wrongColor12, setWrongColor12] = useState('')
    const [wrongColor13, setWrongColor13] = useState('')
    const [wrongColor14, setWrongColor14] = useState('')
    const [wrongColor15, setWrongColor15] = useState('')
    const [wrongColor16, setWrongColor16] = useState('')
    const [wrongColor17, setWrongColor17] = useState('')
    const [wrongColor18, setWrongColor18] = useState('')
    const [wrongColor19, setWrongColor19] = useState('')
    const [wrongColor20, setWrongColor20] = useState('')
    const [wrongColor21, setWrongColor21] = useState('')
    const [wrongColor22, setWrongColor22] = useState('')
    const [wrongColor23, setWrongColor23] = useState('')
    const [wrongColor24, setWrongColor24] = useState('')
    const [wrongColor25, setWrongColor25] = useState('')
    const [wrongColor26, setWrongColor26] = useState('')
    const [wrongColor27, setWrongColor27] = useState('')
    const [wrongColor28, setWrongColor28] = useState('')
    const [wrongColor29, setWrongColor29] = useState('')
    const [wrongColor30, setWrongColor30] = useState('')
    const [wrongColor31, setWrongColor31] = useState('')
    const [wrongColor32, setWrongColor32] = useState('')
    const [wrongColor33, setWrongColor33] = useState('')
    const [wrongColor34, setWrongColor34] = useState('')
    const [wrongColor35, setWrongColor35] = useState('')
    const [wrongColor36, setWrongColor36] = useState('')
    const [wrongColor37, setWrongColor37] = useState('')
    const [wrongColor38, setWrongColor38] = useState('')
    const [wrongColor39, setWrongColor39] = useState('')
    const [wrongColor40, setWrongColor40] = useState('')
    const [wrongColor41, setWrongColor41] = useState('')
    const [wrongColor42, setWrongColor42] = useState('')
    const [wrongColor43, setWrongColor43] = useState('')
    const [wrongColor44, setWrongColor44] = useState('')
    const [wrongColor45, setWrongColor45] = useState('')
    const [wrongColor46, setWrongColor46] = useState('')
    const [wrongColor47, setWrongColor47] = useState('')
    const [wrongColor48, setWrongColor48] = useState('')
    const [wrongColor49, setWrongColor49] = useState('')
    const [wrongColor50, setWrongColor50] = useState('')
    const [wrongColor51, setWrongColor51] = useState('')
    const [wrongColor52, setWrongColor52] = useState('')
    const [wrongColor53, setWrongColor53] = useState('')
    const [wrongColor54, setWrongColor54] = useState('')
    const [wrongColor55, setWrongColor55] = useState('')
    const [wrongColor56, setWrongColor56] = useState('')
    const [wrongColor57, setWrongColor57] = useState('')
    const [wrongColor58, setWrongColor58] = useState('')
    const [wrongColor59, setWrongColor59] = useState('')
    const [wrongColor60, setWrongColor60] = useState('')
    const [wrongColor61, setWrongColor61] = useState('')
    const [wrongColor62, setWrongColor62] = useState('')
    const [wrongColor63, setWrongColor63] = useState('')
    const [wrongColor64, setWrongColor64] = useState('')

   // =========== CLICKS =============

    // winning click
    const correctClick4 = () => {
        setColor4('green')
        setTotalCliks(totalClicks + 1)
        if (color4 === '' &&
            color12 === 'green' &&
            color21 === 'green' &&
            color29 === 'green' &&
            color36 === 'green' &&
            color43 === 'green' &&
            color52 === 'green' &&
            color61 === 'green') {
            Swal.fire({
                title: 'SO LUCKY!',
                text: 'You found the path...',
                imageUrl: 'https://news-api.s3.us-east-2.amazonaws.com/1595527001268.jpg',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
                timer: 5000,
                onClose: () => {
                    restartClick()
                }
            })
        }
    }
    
    //correct clicks
    const correctClick12 = () => {
        setColor12('green')
        setTotalCliks(totalClicks + 1)
    }
    const correctClick21 = () => {
        setColor21('green')
        setTotalCliks(totalClicks + 1)
    }
    const correctClick29 = () => {
        setColor29('green')
        setTotalCliks(totalClicks + 1)
    }
    const correctClick36 = () => {
        setColor36('green')
        setTotalCliks(totalClicks + 1)
    }
    const correctClick43 = () => {
        setColor43('green')
        setTotalCliks(totalClicks + 1)
    }
    const correctClick52 = () => {
        setColor52('green')
        setTotalCliks(totalClicks + 1)
    }
    const correctClick61 = () => {
        setColor61('green')
        setTotalCliks(totalClicks + 1)
    }

    //wrong clicks    
    const wrongClick1 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor1('red')
        setTimeout(function () {
            setWrongColor1('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick2 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor2('red')
        setTimeout(function () {
            setWrongColor2('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick3 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor3('red')
        setTimeout(function () {
            setWrongColor3('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick4 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor4('red')
        setTimeout(function () {
            setWrongColor4('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick5 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor5('red')
        setTimeout(function () {
            setWrongColor5('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick6 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor6('red')
        setTimeout(function () {
            setWrongColor6('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick7 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor7('red')
        setTimeout(function () {
            setWrongColor7('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick8 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor8('red')
        setTimeout(function () {
            setWrongColor8('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick9 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor9('red')
        setTimeout(function () {
            setWrongColor9('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick10 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor10('red')
        setTimeout(function () {
            setWrongColor10('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick11 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor11('red')
        setTimeout(function () {
            setWrongColor11('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick12 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor12('red')
        setTimeout(function () {
            setWrongColor12('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick13 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor13('red')
        setTimeout(function () {
            setWrongColor13('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick14 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor14('red')
        setTimeout(function () {
            setWrongColor14('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick15 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor15('red')
        setTimeout(function () {
            setWrongColor15('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick16 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor16('red')
        setTimeout(function () {
            setWrongColor16('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick17 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor17('red')
        setTimeout(function () {
            setWrongColor17('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick18 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor18('red')
        setTimeout(function () {
            setWrongColor18('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick19 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor19('red')
        setTimeout(function () {
            setWrongColor19('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick20 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor20('red')
        setTimeout(function () {
            setWrongColor20('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick21 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor21('red')
        setTimeout(function () {
            setWrongColor21('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick22 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor22('red')
        setTimeout(function () {
            setWrongColor22('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick23 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor23('red')
        setTimeout(function () {
            setWrongColor23('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick24 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor24('red')
        setTimeout(function () {
            setWrongColor24('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick25 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor25('red')
        setTimeout(function () {
            setWrongColor25('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick26 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor26('red')
        setTimeout(function () {
            setWrongColor26('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick27 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor27('red')
        setTimeout(function () {
            setWrongColor27('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick28 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor28('red')
        setTimeout(function () {
            setWrongColor28('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick29 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor29('red')
        setTimeout(function () {
            setWrongColor29('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick30 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor30('red')
        setTimeout(function () {
            setWrongColor30('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick31 = () => {
        setTotalCliks(totalClicks + 1)
        setWrong(wrong + 1)
        setWrongColor31('red')
        setTimeout(function () {
            setWrongColor31('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick32 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor32('red')
        setTimeout(function () {
            setWrongColor32('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick33 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor33('red')
        setTimeout(function () {
            setWrongColor33('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick34 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor34('red')
        setTimeout(function () {
            setWrongColor34('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick35 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor35('red')
        setTimeout(function () {
            setWrongColor35('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick36 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor36('red')
        setTimeout(function () {
            setWrongColor36('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick37 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor37('red')
        setTimeout(function () {
            setWrongColor37('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick38 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor38('red')
        setTimeout(function () {
            setWrongColor38('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick39 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor39('red')
        setTimeout(function () {
            setWrongColor39('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick40 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor40('red')
        setTimeout(function () {
            setWrongColor40('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick41 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor41('red')
        setTimeout(function () {
            setWrongColor41('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick42 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor42('red')
        setTimeout(function () {
            setWrongColor42('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick43 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor43('red')
        setTimeout(function () {
            setWrongColor43('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick44 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor44('red')
        setTimeout(function () {
            setWrongColor44('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick45 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor45('red')
        setTimeout(function () {
            setWrongColor45('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick46 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor46('red')
        setTimeout(function () {
            setWrongColor46('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick47 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor17('red')
        setTimeout(function () {
            setWrongColor47('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick48 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor48('red')
        setTimeout(function () {
            setWrongColor48('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick49 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor49('red')
        setTimeout(function () {
            setWrongColor49('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick50 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor50('red')
        setTimeout(function () {
            setWrongColor50('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick51 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor51('red')
        setTimeout(function () {
            setWrongColor51('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick52 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor52('red')
        setTimeout(function () {
            setWrongColor52('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick53 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor53('red')
        setTimeout(function () {
            setWrongColor53('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick54 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor54('red')
        setTimeout(function () {
            setWrongColor54('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick55 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor55('red')
        setTimeout(function () {
            setWrongColor55('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick56 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor56('red')
        setTimeout(function () {
            setWrongColor56('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick57 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor57('red')
        setTimeout(function () {
            setWrongColor57('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick58 = () => {

        setTotalCliks(totalClicks + 1)
        setWrong(wrong + 1)
        setWrongColor58('red')
        setTimeout(function () {
            setWrongColor58('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick59 = () => {
        setWrong(wrong + 1)
        setTotalCliks(totalClicks + 1)
        setWrongColor59('red')
        setTimeout(function () {
            setWrongColor59('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick60 = () => {

        setTotalCliks(totalClicks + 1)
        setWrong(wrong + 1)
        setWrongColor60('red')
        setTimeout(function () {
            setWrongColor60('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick61 = () => {

        setTotalCliks(totalClicks + 1)
        setWrong(wrong + 1)
        setWrongColor61('red')
        setTimeout(function () {
            setWrongColor61('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick62 = () => {

        setTotalCliks(totalClicks + 1)
        setWrong(wrong + 1)
        setWrongColor62('red')
        setTimeout(function () {
            setWrongColor62('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick63 = () => {
        setTotalCliks(totalClicks + 1)
        setWrong(wrong + 1)
        setWrongColor63('red')
        setTimeout(function () {
            setWrongColor63('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }
    const wrongClick64 = () => {
        setWrong(wrong + 1)
        setWrongColor64('red')
        setTimeout(function () {
            setWrongColor64('')
        }, 100);
        setColor4('')
        setColor12('')
        setColor21('')
        setColor29('')
        setColor36('')
        setColor43('')
        setColor52('')
        setColor61('')
    }

    // ============ GAME  HELPERS AND CONTROLS =============

    // refresh the whole page
    const restartClick = () => {
        window.location.reload();
    }

    //helper click flashes the path
    const helperClick = () => {
        setHelpCount(helpCount + 1)
        setColor4('green')
        setColor12('green')
        setColor21('green')
        setColor29('green')
        setColor36('green')
        setColor43('green')
        setColor52('green')
        setColor61('green')
        setTimeout(function () {
            setColor4('')
            setColor12('')
            setColor21('')
            setColor29('')
            setColor36('')
            setColor43('')
            setColor52('')
            setColor61('')
        }, 75);
    }


    // ================== THE GAME ================

    return (
        <>
            <Navbar />
            <div className="container">
                <h4 className="mt-3 text-center border border-left-0 border-right-0 page-title text-monospace">The Pathfinder</h4>
                <div className="row text-center p-3 shadow-sm">
                    <div className="col-4">
                        <Link to="/game-rules"><button
                            className="btn btn-outline-secondary">
                            GAME RULES</button></Link>
                    </div>
                    <div className="col-4">
                        <button
                            onClick={restartClick}
                            className="btn btn-outline-warning">RESTART GAME</button>
                    </div>
                    <div className="col-4">
                        <button
                            onClick={null}
                            className="btn btn-outline-info">SAVE RESULTS</button>
                    </div>
                </div>
                <div className="row my-3 justify-content-center">
                    <button
                        onClick={helperClick}
                        className="btn btn-lg btn-primary rounded-pill shadow">HELP ME! <span className="badge badge-light"> {helpCount}</span>
                    </button>
                </div>
                <div className="game-row row content-justify-center mt-3">
                    <div className="wrapper">
                        <div className="top">
                            <div className="row d-flex justify-content-around pt-4">
                                <h4
                                    className="text-primary text-monospace my-auto">
                                    Total Guesses: {totalClicks}
                                </h4>
                                <h4
                                    className="text-danger text-monospace my-auto">
                                    Wrong Guesses: {wrong}
                                </h4>
                            </div>
                            <div className="wrapper-inner">
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                            </div>
                        </div>
                        <button
                            style={{ backgroundColor: wrongColor1 }}
                            onClick={wrongClick1}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor2 }}
                            onClick={wrongClick2}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor3 }}
                            onClick={wrongClick3}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color4 }}
                            onClick={correctClick4}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor5 }}
                            onClick={wrongClick5}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor6 }}
                            onClick={wrongClick6}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor7 }}
                            onClick={wrongClick7}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor8 }}
                            onClick={wrongClick8}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor9 }}
                            onClick={wrongClick9}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor10 }}
                            onClick={wrongClick10}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor11 }}
                            onClick={wrongClick11}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color12 }}
                            onClick={correctClick12}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor13 }}
                            onClick={wrongClick13}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor14 }}
                            onClick={wrongClick14}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor15 }}
                            onClick={wrongClick15}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor16 }}
                            onClick={wrongClick16}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor17 }}
                            onClick={wrongClick17}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor18 }}
                            onClick={wrongClick18}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor19 }}
                            onClick={wrongClick19}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor20 }}
                            onClick={wrongClick20}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color21 }}
                            onClick={correctClick21}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor22 }}
                            onClick={wrongClick22}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor23 }}
                            onClick={wrongClick23}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor24 }}
                            onClick={wrongClick24}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor25 }}
                            onClick={wrongClick25}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor26 }}
                            onClick={wrongClick26}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor27 }}
                            onClick={wrongClick27}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor28 }}
                            onClick={wrongClick28}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color29 }}
                            onClick={correctClick29}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor30 }}
                            onClick={wrongClick30}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor31 }}
                            onClick={wrongClick31}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor32 }}
                            onClick={wrongClick32}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor33 }}
                            onClick={wrongClick33}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor34 }}
                            onClick={wrongClick34}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor35 }}
                            onClick={wrongClick35}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color36 }}
                            onClick={correctClick36}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor37 }}
                            onClick={wrongClick37}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor38 }}
                            onClick={wrongClick38}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor39 }}
                            onClick={wrongClick39}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor40 }}
                            onClick={wrongClick40}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor41 }}
                            onClick={wrongClick41}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor42 }}
                            onClick={wrongClick42}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color43 }}
                            onClick={correctClick43}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor44 }}
                            onClick={wrongClick44}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor45 }}
                            onClick={wrongClick45}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor46 }}
                            onClick={wrongClick46}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor47 }}
                            onClick={wrongClick47}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor48 }}
                            onClick={wrongClick48}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor49 }}
                            onClick={wrongClick49}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor50 }}
                            onClick={wrongClick50}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor51 }}
                            onClick={wrongClick51}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color52 }}
                            onClick={correctClick52}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor53 }}
                            onClick={wrongClick53}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor54 }}
                            onClick={wrongClick54}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor55 }}
                            onClick={wrongClick55}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor56 }}
                            onClick={wrongClick56}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor57 }}
                            onClick={wrongClick57}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor58 }}
                            onClick={wrongClick58}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor59 }}
                            onClick={wrongClick59}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor60 }}
                            onClick={wrongClick60}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: color61 }}
                            onClick={correctClick61}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor62 }}
                            onClick={wrongClick62}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor63 }}
                            onClick={wrongClick63}
                            className="box btn btn-primary"></button>
                        <button
                            style={{ backgroundColor: wrongColor64 }}
                            onClick={wrongClick64}
                            className="box btn btn-primary"></button>
                        <div className="bottom">
                            <div className="wrapper-inner">
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner">&uarr;</div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                                <div className="box-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IThePathfinderProps { };

export default ThePathfinder;