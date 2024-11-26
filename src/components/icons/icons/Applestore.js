import * as React from "react";
const SvgApplestore = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={132}
    height={45}
    fill="none"
    {...props}
  >
    <path fill="url(#applestore_svg__a)" d="M0 0h132v45H0z" />
    <defs>
      <pattern
        id="applestore_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#applestore_svg__b" transform="scale(.00758 .02222)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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vG06lmnaivrRRx9te+yxRyL/1FNP2ddff53ea8m0b9/efv/9d/vxxx8dHSnx6KOP2ocffmg9evRwydO7d29ba621bLbZZrOhQ4c601x22WV2880323333WfLLrus7b///rbffvs5jeHDh9tuu+3m0ubdd9+1lVde2Wntvvvu9sgjj1gIwR+Qp59+ett7771tzjnnNPpy3nnn2WeffWZrrrmm0e5cc81ljz/+uF177bVOe7755rODDz7YPv74Y/vuu+8SHa+c9NO9e3fr16+fzTzzzPbSSy/Z1Vdf7TUXX3yxffrpp7biiisaONtuu629/PJkm9HZZ59tyy23nB122GE+LvpJnw499FBnEub2jDPOcFo77rijHX744dahQweXUgceeGC2C1Xzo4SRvZNOdV7iMvzyyy/q82TYbrvtCtPVgMMXX3zR4juJ4rDJJpuEvn37hlNPPdXrZ5hhhvDiiy+G9dZbL5x88snhmmuu8fILLrggaGcFMUzQZAe+ZbxiqrDnnnt6XgsUxLCe15ERdGR4/s477wyLL76459dee+0wbtw4z2fn66GHHvI2Z5111vDwww+HWWaZJdERs5TgS1KGW2+9NZVdd9114dhjj/X3jz76KGy00Uae12KGYcOGJbzYnpgsSEJ4uTZbEAOFzp07+/sTTzwRtthiCx+jGD3146677gobbLBBC1qRZiadoLy1iYQ48sgjbdppp4W+w4gRI3zHxvepTTX59t5779lpp51mYggn98MPP5iYwHfW+eef7zujY8eOrrdceuml1qdPH1tooYXsqquucnwtnN19992ef+aZZ2zBBRf0fPxhB4M/ZgzXczMttn3//fe22mqr2U8//WQXXnihjxG9iCNRC2OvvvqqffPNN47//vvve5r9oQ/oQxEuuugiu+SSS4z+chQwT8Czzz7rUiziVUofe+wx7xP1Tz/9tC2zzDIutSZMmGCHHHKIf/b555/bdNNNV4lEi/I2YYhVVlklNSQOtZ122im9T21mnXXWsYkTJ/pxwaSjvD333HNOdoEFFnDlFSWWiYBhtMvttttu8wcm1W5xXMRtBMkxF6+8k+ehDUkd69SpUzqy5plnHj8y0GF23XVXZ4AHHnjAv0Xczz///JGkzT777CkfM/RXki2+Gv3lCGrXrl0qI5PtT7bi119/Ta/Z/me/QU+j7qSTTkq4RTJT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"
        id="applestore_svg__b"
        width={132}
        height={45}
      />
    </defs>
  </svg>
);
export default SvgApplestore;
