import React from "react";


const Load = () => {
  return (
    <svg className='loading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#25d0c5">
      <circle cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin="0"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(45 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".125s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(90 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".25s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(135 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".375s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(180 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".5s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(225 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".625s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(270 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".75s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(315 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".875s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
      <circle transform="rotate(180 12 12)" cx="12" cy="2" r="0">
      <animate attributeName="r" values="0;2;0;0" dur="1s" repeatCount="indefinite" begin=".5s"
              keySplines=".2 .2 .4 .8;.2 .2 .4 .8;.2 .2 .4 .8" calcMode="spline"/>
      </circle>
    </svg>
  );
}
export default Load;