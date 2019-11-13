import React, { lazy } from 'react';

const SecondaryButton = lazy(() => import('../Common/Button/SecondaryButton'));

import i18n from '../../locales/i18n.js';
import { updateRoute } from '../../helpers/routerHelper';

export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'error-container sidenav-wrapper'}>
        <div className={'container'}>
          <svg className="page404" viewBox="0 0 5059 4833">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="404" transform="translate(20.000000, 20.000000)">
                <path
                  d="M2534,4063 C2534,4465.61629 2209.36983,4792 1808.91667,4792 L1291,4792 M3984,4063 C3984,4465.61629 4308.369,4792 4708.5,4792 L5019,4792 M293,625 L293,677.0625 C293,1108.34825 640.739556,1458 1069.66667,1458 L1225,1458 M1083,937 C1083,1454.43222 1500.39286,1874 2015.14286,1874 L2533,1874 M5019,1042 C5019,1502.2325 4648.056,1875 4191,1875 L3984,1875 M2534,4063 L2534,1042 M3984,4063 L3984,1042 M2845,677 C2845,907.184 3030.472,1094 3259,1094 C3487.735,1094 3673,907.184 3673,677 M2845,625 C2845,855.184 2659.556,1042 2430.6,1042 L2327,1042 M3673,625 C3673,855.184 3858.6512,1042 4087.4,1042 L4191,1042"
                  id="tree"
                  stroke="#000000"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1083,0 L1083,312"
                  id="leaf"
                  stroke="#000000"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1912,521 L1912,833"
                  id="leaf"
                  stroke="#000000"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3155,0 L3155,312"
                  id="leaf"
                  stroke="#000000"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4605,104 L4605,416"
                  id="leaf"
                  stroke="#000000"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2860,2144 L3676,2144 L3676,3116 L2860,3116 L2860,2144 Z M2937,2221 L2937,2726 L3598,2726 L3598,2221 L2937,2221 Z"
                  id="border"
                  stroke="#000000"
                  strokeWidth="30"
                  strokeLinejoin="round"
                />
                <path
                  d="M3066,2513.52727 L3066,2395 L3101.68605,2395 C3108.17445,2395 3114.12207,2395.60227 3119.52907,2396.80682 C3124.93607,2398.01137 3129.562,2399.96874 3133.40698,2402.67898 C3137.25196,2405.38922 3140.22576,2408.9727 3142.32849,2413.42955 C3144.43121,2417.88639 3145.48256,2423.36701 3145.48256,2429.87159 C3145.48256,2436.13526 3144.43121,2441.55566 3142.32849,2446.13295 C3140.22576,2450.71025 3137.22192,2454.50453 3133.31686,2457.51591 C3129.4118,2460.52729 3124.78588,2462.78579 3119.43895,2464.29148 C3114.09203,2465.79717 3108.17445,2466.55 3101.68605,2466.55 L3080.9593,2466.55 L3080.9593,2513.52727 L3066,2513.52727 Z M3080.9593,2454.26364 L3099.88372,2454.26364 C3110.33726,2454.26364 3118.02711,2452.30627 3122.95349,2448.39148 C3127.87987,2444.47668 3130.34302,2438.30345 3130.34302,2429.87159 C3130.34302,2421.31928 3127.81979,2415.38695 3122.77326,2412.07443 C3117.72672,2408.76192 3110.09695,2407.10568 3099.88372,2407.10568 L3080.9593,2407.10568 L3080.9593,2454.26364 Z M3200.09302,2515.69545 C3196.00773,2515.69545 3192.16281,2515.1233 3188.55814,2513.97898 C3184.95347,2512.83465 3181.79943,2511.20853 3179.09593,2509.10057 C3176.39243,2506.9926 3174.2597,2504.40286 3172.69767,2501.33125 C3171.13565,2498.25964 3170.35465,2494.73638 3170.35465,2490.76136 C3170.35465,2485.8227 3171.52615,2481.5165 3173.86919,2477.84261 C3176.21222,2474.16873 3179.93699,2471.00683 3185.0436,2468.35682 C3190.15022,2465.7068 3196.72864,2463.53864 3204.77907,2461.85227 C3212.8295,2460.1659 3222.50188,2458.84091 3233.79651,2457.87727 C3233.67636,2454.86589 3233.19574,2452.03524 3232.35465,2449.38523 C3231.51356,2446.73521 3230.19187,2444.41649 3228.38953,2442.42898 C3226.5872,2440.44147 3224.21416,2438.84546 3221.27035,2437.64091 C3218.32654,2436.43636 3214.75196,2435.83409 3210.54651,2435.83409 C3204.77904,2435.83409 3199.25196,2436.94828 3193.96512,2439.1767 C3188.67827,2441.40512 3183.99227,2443.78408 3179.90698,2446.31364 L3174.13953,2436.19545 C3176.30234,2434.74999 3178.85561,2433.27444 3181.79942,2431.76875 C3184.74323,2430.26306 3187.86723,2428.90796 3191.17151,2427.70341 C3194.47579,2426.49886 3197.99029,2425.50512 3201.71512,2424.72216 C3205.43994,2423.9392 3209.22479,2423.54773 3213.06977,2423.54773 C3225.08533,2423.54773 3234.00675,2426.83008 3239.8343,2433.39489 C3245.66185,2439.95969 3248.57558,2448.72267 3248.57558,2459.68409 L3248.57558,2513.52727 L3236.5,2513.52727 L3235.23837,2501.60227 L3234.69767,2501.60227 C3229.77129,2505.45684 3224.33433,2508.7693 3218.38663,2511.53977 C3212.43892,2514.31024 3206.34112,2515.69545 3200.09302,2515.69545 Z M3204.05814,2503.77045 C3209.10468,2503.77045 3214.06102,2502.65626 3218.92733,2500.42784 C3223.79363,2498.19942 3228.74997,2494.97729 3233.79651,2490.76136 L3233.79651,2467.63409 C3224.42437,2468.35682 3216.58433,2469.38068 3210.27616,2470.70568 C3203.96799,2472.03069 3198.92153,2473.6267 3195.13663,2475.49375 C3191.35173,2477.3608 3188.6783,2479.46874 3187.11628,2481.81761 C3185.55426,2484.16649 3184.77326,2486.78635 3184.77326,2489.67727 C3184.77326,2492.20683 3185.31395,2494.34488 3186.39535,2496.09148 C3187.47675,2497.83808 3188.88856,2499.28352 3190.63081,2500.42784 C3192.37307,2501.57216 3194.41569,2502.41534 3196.75872,2502.95739 C3199.10176,2503.49943 3201.53487,2503.77045 3204.05814,2503.77045 Z M3317.24419,2554 C3304.38753,2554 3294.4448,2551.89207 3287.4157,2547.67614 C3280.38659,2543.46021 3276.87209,2537.43754 3276.87209,2529.60795 C3276.87209,2526.11476 3278.10367,2522.68184 3280.56686,2519.30909 C3283.03005,2515.93635 3286.60463,2512.86479 3291.2907,2510.09432 L3291.2907,2509.37159 C3288.88758,2508.04658 3286.78489,2506.23978 3284.98256,2503.95114 C3283.18022,2501.66249 3282.27907,2498.65116 3282.27907,2494.91705 C3282.27907,2492.14658 3283.18022,2489.28581 3284.98256,2486.33466 C3286.78489,2483.38351 3289.3682,2480.76365 3292.73256,2478.475 L3292.73256,2477.75227 C3289.72867,2475.46362 3287.1754,2472.42218 3285.07267,2468.62784 C3282.96995,2464.8335 3281.9186,2460.28639 3281.9186,2454.98636 C3281.9186,2450.16816 3282.8498,2445.83184 3284.71221,2441.97727 C3286.57462,2438.12271 3289.06781,2434.84035 3292.19186,2432.13011 C3295.31591,2429.41987 3298.95056,2427.31194 3303.09593,2425.80625 C3307.2413,2424.30056 3311.65695,2423.54773 3316.34302,2423.54773 C3321.14925,2423.54773 3325.47479,2424.27045 3329.31977,2425.71591 L3365.54651,2425.71591 L3365.54651,2437.82159 L3342.83721,2437.82159 C3344.87986,2439.86933 3346.62209,2442.45908 3348.06395,2445.59091 C3349.50582,2448.72274 3350.22674,2452.03521 3350.22674,2455.52841 C3350.22674,2460.22616 3349.35563,2464.44203 3347.61337,2468.17614 C3345.87112,2471.91025 3343.46804,2475.07215 3340.40407,2477.66193 C3337.3401,2480.25172 3333.73549,2482.2392 3329.59012,2483.62443 C3325.44475,2485.00967 3321.02909,2485.70227 3316.34302,2485.70227 C3314.06007,2485.70227 3311.62695,2485.43125 3309.0436,2484.8892 C3306.46026,2484.34716 3303.96707,2483.5341 3301.56395,2482.45 C3296.99804,2485.34092 3294.71512,2488.71362 3294.71512,2492.56818 C3294.71512,2496.06138 3296.30715,2498.62101 3299.49128,2500.24716 C3302.6754,2501.8733 3307.15113,2502.68636 3312.9186,2502.68636 L3332.56395,2502.68636 C3343.85858,2502.68636 3352.23931,2504.25226 3357.7064,2507.38409 C3363.17348,2510.51592 3365.90698,2515.81587 3365.90698,2523.28409 C3365.90698,2527.37957 3364.76552,2531.2943 3362.48256,2535.02841 C3360.1996,2538.76252 3356.95545,2542.01476 3352.75,2544.78523 C3348.54455,2547.5557 3343.43801,2549.78408 3337.43023,2551.47045 C3331.42245,2553.15683 3324.69384,2554 3317.24419,2554 Z M3316.34302,2475.76477 C3321.99034,2475.76477 3326.76645,2473.89775 3330.67151,2470.16364 C3334.57657,2466.42953 3336.52907,2461.37049 3336.52907,2454.98636 C3336.52907,2451.97498 3335.98838,2449.20456 3334.90698,2446.675 C3333.82558,2444.14544 3332.38373,2441.97728 3330.5814,2440.17045 C3328.77906,2438.36363 3326.64633,2436.9483 3324.18314,2435.92443 C3321.71995,2434.90056 3319.1066,2434.38864 3316.34302,2434.38864 C3313.57944,2434.38864 3310.9661,2434.90056 3308.50291,2435.92443 C3306.03972,2436.9483 3303.90699,2438.36363 3302.10465,2440.17045 C3300.30232,2441.97728 3298.86047,2444.14544 3297.77907,2446.675 C3296.69767,2449.20456 3296.15698,2451.97498 3296.15698,2454.98636 C3296.15698,2461.37049 3298.13952,2466.42953 3302.10465,2470.16364 C3306.06979,2473.89775 3310.81586,2475.76477 3316.34302,2475.76477 Z M3318.32558,2543.15909 C3323.37212,2543.15909 3327.93796,2542.67728 3332.02326,2541.71364 C3336.10855,2540.75 3339.59301,2539.45512 3342.47674,2537.82898 C3345.36048,2536.20283 3347.55329,2534.33581 3349.05523,2532.22784 C3350.55718,2530.11988 3351.30814,2527.9216 3351.30814,2525.63295 C3351.30814,2521.41702 3349.65602,2518.58637 3346.35174,2517.14091 C3343.04746,2515.69545 3338.03104,2514.97273 3331.30233,2514.97273 L3314.18023,2514.97273 C3311.65696,2514.97273 3309.28393,2514.88239 3307.06105,2514.7017 C3304.83817,2514.52102 3302.76551,2514.12955 3300.84302,2513.52727 C3296.63758,2515.81592 3293.72385,2518.19487 3292.10174,2520.6642 C3290.47964,2523.13354 3289.6686,2525.63294 3289.6686,2528.1625 C3289.6686,2532.7398 3292.10172,2536.38351 3296.96802,2539.09375 C3301.83433,2541.80399 3308.95344,2543.15909 3318.32558,2543.15909 Z M3431.51163,2515.69545 C3424.90307,2515.69545 3418.74518,2514.6716 3413.03779,2512.62386 C3407.3304,2510.57613 3402.34401,2507.56479 3398.07849,2503.58977 C3393.81296,2499.61475 3390.44866,2494.76651 3387.98547,2489.04489 C3385.52227,2483.32327 3384.2907,2476.78867 3384.2907,2469.44091 C3384.2907,2462.33406 3385.52227,2455.95003 3387.98547,2450.28864 C3390.44866,2444.62724 3393.75289,2439.80911 3397.89826,2435.83409 C3402.04363,2431.85907 3406.7897,2428.81762 3412.13663,2426.70966 C3417.48355,2424.60169 3423.10075,2423.54773 3428.98837,2423.54773 C3435.23647,2423.54773 3440.85366,2424.54147 3445.84012,2426.52898 C3450.82658,2428.51649 3455.03196,2431.31703 3458.4564,2434.93068 C3461.88083,2438.54434 3464.49418,2442.88066 3466.29651,2447.93977 C3468.09885,2452.99889 3469,2458.59997 3469,2464.74318 C3469,2466.42955 3468.93992,2468.05567 3468.81977,2469.62159 C3468.69961,2471.18751 3468.51938,2472.57272 3468.27907,2473.77727 L3399.25,2473.77727 C3400.21125,2483.77505 3403.8459,2491.27327 3410.15407,2496.27216 C3416.46224,2501.27105 3424.18212,2503.77045 3433.31395,2503.77045 C3438.6008,2503.77045 3443.37692,2503.01762 3447.64244,2501.51193 C3451.90797,2500.00624 3456.02324,2497.98865 3459.98837,2495.45909 L3465.39535,2505.21591 C3461.06975,2508.10683 3456.1134,2510.57613 3450.52616,2512.62386 C3444.93893,2514.6716 3438.60081,2515.69545 3431.51163,2515.69545 Z M3429.34884,2435.29205 C3425.74417,2435.29205 3422.28975,2435.89431 3418.98547,2437.09886 C3415.68119,2438.30342 3412.70738,2440.01988 3410.06395,2442.2483 C3407.42053,2444.47672 3405.19768,2447.27726 3403.39535,2450.65 C3401.59301,2454.02274 3400.3314,2457.87725 3399.61047,2462.21364 L3455.48256,2462.21364 C3454.88178,2453.1795 3452.26843,2446.43411 3447.64244,2441.97727 C3443.01645,2437.52043 3436.91864,2435.29205 3429.34884,2435.29205 Z"
                  id="Page"
                  fill="#000000"
                />
                <path
                  d="M3396,3002.17284 L3396,2970.55556 L3474.29582,2803 L3511.75563,2803 L3432.49518,2970.55556 L3493.7492,2970.55556 L3493.7492,2903.30864 L3527.35048,2903.30864 L3527.35048,2970.55556 L3546,2970.55556 L3546,3002.17284 L3527.35048,3002.17284 L3527.35048,3037 L3493.7492,3037 L3493.7492,3002.17284 L3396,3002.17284 Z M3202,2971.55061 L3202,2868.2888 C3202.21443,2846.66206 3209.12972,2830.014 3222.74607,2818.34413 C3235.5047,2806.78132 3250.72905,2801 3268.41959,2801 C3286.6462,2801 3302.13859,2806.78132 3314.89722,2818.34413 C3327.87028,2830.014 3334.57114,2846.66206 3335,2868.2888 L3335,2971.55061 C3334.57114,2993.07028 3327.87028,3009.66481 3314.89722,3021.33468 C3302.13859,3032.89749 3286.6462,3038.78587 3268.41959,3039 C3250.72905,3038.78587 3235.5047,3032.89749 3222.74607,3021.33468 C3209.12972,3009.66481 3202.21443,2993.07028 3202,2971.55061 Z M3301.38815,2969.62348 C3300.74486,2993.28442 3289.75545,3005.22177 3268.41959,3005.4359 C3246.97652,3005.22177 3236.04071,2993.28442 3235.61185,2969.62348 L3235.61185,2870.37652 C3236.04071,2846.92971 3246.97652,2834.99235 3268.41959,2834.5641 C3289.75545,2834.99235 3300.74486,2846.92971 3301.38815,2870.37652 L3301.38815,2969.62348 Z M2990,3002.17284 L2990,2970.55556 L3068.29582,2803 L3105.75563,2803 L3026.49518,2970.55556 L3087.7492,2970.55556 L3087.7492,2903.30864 L3121.35048,2903.30864 L3121.35048,2970.55556 L3140,2970.55556 L3140,3002.17284 L3121.35048,3002.17284 L3121.35048,3037 L3087.7492,3037 L3087.7492,3002.17284 L2990,3002.17284 Z"
                  id="notFound"
                  fill="#000000"
                />
                <path
                  d="M582.4375,4792.43333 C903.798189,4792.43333 1164.3125,4531.89291 1164.3125,4210.5 C1164.3125,3889.10709 903.798189,3628.56667 582.4375,3628.56667 C261.076811,3628.56667 0.5625,3889.10709 0.5625,4210.5 C0.5625,4531.89291 261.076811,4792.43333 582.4375,4792.43333 Z M582.4375,4418.33333 C467.641875,4418.33333 374.625,4325.30713 374.625,4210.5 C374.625,4095.69287 467.641875,4002.66667 582.4375,4002.66667 C629.070625,4002.66667 672.129375,4018.04633 706.7925,4043.9008 M582.4375,3628.56667 L1330.5625,3628.56667 C1651.92375,3628.56667 1912.4375,3889.10653 1912.4375,4210.5 C1912.4375,4531.89347 1651.92375,4792.43333 1330.5625,4792.43333 L582.4375,4792.43333 M249.77125,4459.73373 C325.58125,4560.74073 446.361875,4626.16667 582.4375,4626.16667 C812.02875,4626.16667 998.0625,4440.11427 998.0625,4210.5 C998.0625,3980.88573 812.02875,3794.83333 582.4375,3794.83333 M1108.28625,4459.9 L1413.6875,4459.9 M1372.125,4210.5 L1496.8125,4210.5 M1704.625,4127.36667 L1906.53562,4127.36667 M1856.41125,3961.1 L1496.8125,3961.1 M582.4375,4168.93333 L582.4375,4252.06667"
                  id="wood-stump"
                  stroke="#000000"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
        {/* <img src={info} /> */}
        {/* <h1>404</h1>
        <h4>Page not found.</h4> */}

        <p>{i18n.t('label.planting_404')}</p>
        <SecondaryButton onClick={() => updateRoute('app_homepage')}>
          {i18n.t('label.plant_trees')}
        </SecondaryButton>
      </div>
    );
  }
}

PageNotFound.propTypes = {};
