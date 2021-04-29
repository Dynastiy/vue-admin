<template>
    <div>
         <svg id="icon-bar-chart" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
            fill="none" stroke="#0392ce" stroke-width="2" stroke-linecap="flat" stroke-linejoin="round">
            <line class="bar3" x1="9" y1="20" x2="9" y2="10"></line>
            <line class="bar2" x1="6" y1="20" x2="6" y2="8"></line>
            <line class="bar1" x1="3" y1="20" x2="3" y2="5"></line>
            <line class="bar4" x1="12" y1="20" x2="12" y2="12"></line>
        </svg>
    </div>
</template>


<style scoped>
                div {
                        /* margin-top: 10%; */
                        margin-left: 20%;
                    }

                svg {
                        text-align: center;
                        margin: auto;
                        width: 100px;
                        height: 100px;
                }

                #icon-bar-chart .bar1 {
                        -webkit-animation: bars 2.5s linear infinite alternate;
                        animation: bars 2.5s linear infinite alternate;
                }

                #icon-bar-chart .bar3 {
                        -webkit-animation: bars 2.5s linear infinite alternate;
                        animation: bars 2.5s linear infinite alternate;
                }

                #icon-bar-chart .bar2 {
                        -webkit-animation: bars 2.5s linear infinite alternate;
                        animation: bars 2.5s linear infinite alternate;
                }
                #icon-bar-chart .bar4 {
                        -webkit-animation: bars 2.5s linear infinite alternate;
                        animation: bars 2.5s linear infinite alternate;
                }  

                @-webkit-keyframes bars {
                        0% {
                                -webkit-transform: scaleY(0.4);
                                transform: scaleY(0.4);
                                -webkit-transform-origin: 0% 100%;
                                transform-origin: 0% 100%;
                        }

                        100% {
                                -webkit-transform: scaleY(1);
                                transform: scaleY(1);
                                -webkit-transform-origin: 0% 100%;
                                transform-origin: 0% 100%;
                        }
                }

                @keyframes bars {
                        0% {
                                -webkit-transform: scaleY(0.4);
                                transform: scaleY(0.4);
                                -webkit-transform-origin: 0% 100%;
                                transform-origin: 0% 100%;
                        }

                        100% {
                                -webkit-transform: scaleY(1);
                                transform: scaleY(1);
                                -webkit-transform-origin: 0% 100%;
                                transform-origin: 0% 100%;
                        }
                }
</style>