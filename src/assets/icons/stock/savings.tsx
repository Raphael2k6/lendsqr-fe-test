import React from "react";
/**
 * Account Profile Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props: unknown): unknown => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_35498_796)">
      <path
        opacity="0.4"
        d="M15.5555 6.22221H14.7358C14.4921 5.67106 14.1389 5.17525 13.6975 4.76499L14.2222 2.66666H13.3333C12.5166 2.66666 11.7947 3.04166 11.3055 3.61999C11.0952 3.58943 10.8855 3.55555 10.6666 3.55555H7.11107C4.47718 3.55555 2.66663 5.74666 2.66663 7.99999C2.66609 8.69006 2.8265 9.37075 3.13511 9.98797C3.44372 10.6052 3.89202 11.1419 4.44441 11.5555V13.7778C4.44441 13.8956 4.49123 14.0087 4.57458 14.092C4.65793 14.1754 4.77098 14.2222 4.88885 14.2222H6.66663C6.7845 14.2222 6.89755 14.1754 6.9809 14.092C7.06425 14.0087 7.11107 13.8956 7.11107 13.7778V12.4444H10.6666V13.7778C10.6666 13.8956 10.7135 14.0087 10.7968 14.092C10.8802 14.1754 10.9932 14.2222 11.1111 14.2222H12.8889C13.0067 14.2222 13.1198 14.1754 13.2031 14.092C13.2865 14.0087 13.3333 13.8956 13.3333 13.7778V11.5355C13.6617 11.2874 13.9541 10.995 14.2022 10.6667H15.5555C15.6734 10.6667 15.7864 10.6198 15.8698 10.5365C15.9531 10.4531 16 10.3401 16 10.2222V6.66666C16 6.54878 15.9531 6.43574 15.8698 6.35239C15.7864 6.26904 15.6734 6.22221 15.5555 6.22221ZM12 7.99999C11.9121 7.99999 11.8261 7.97392 11.753 7.92509C11.68 7.87625 11.623 7.80684 11.5893 7.72563C11.5557 7.64441 11.5469 7.55505 11.5641 7.46884C11.5812 7.38262 11.6235 7.30343 11.6857 7.24128C11.7478 7.17912 11.827 7.13679 11.9133 7.11964C11.9995 7.10249 12.0888 7.11129 12.17 7.14493C12.2513 7.17857 12.3207 7.23554 12.3695 7.30863C12.4183 7.38171 12.4444 7.46764 12.4444 7.55555C12.4444 7.67342 12.3976 7.78647 12.3142 7.86982C12.2309 7.95317 12.1178 7.99999 12 7.99999Z"
        fill="#213F7D"
      />
      <path
        d="M1.42389 7.09778C1.33809 7.08034 1.25657 7.04618 1.18397 6.99724C1.11138 6.9483 1.04913 6.88554 1.0008 6.81254C0.952457 6.73954 0.918971 6.65774 0.902249 6.5718C0.885526 6.48586 0.885895 6.39746 0.903335 6.31167C0.965002 5.995 1.26111 5.77778 1.58333 5.77778H1.61111C1.65532 5.77778 1.69771 5.76022 1.72896 5.72896C1.76022 5.69771 1.77778 5.65531 1.77778 5.61111V5.05556C1.77778 5.01135 1.76022 4.96896 1.72896 4.9377C1.69771 4.90645 1.65532 4.88889 1.61111 4.88889C0.819446 4.88889 0.11389 5.45556 0.0130571 6.23944C0.00426675 6.30603 -9.46853e-05 6.37312 1.5585e-06 6.44028C-0.000514501 6.85338 0.163075 7.24977 0.454791 7.54227C0.746506 7.83476 1.14246 7.99941 1.55556 8H2.66667C2.66696 7.70126 2.69833 7.40336 2.76028 7.11111H1.55556C1.51133 7.11111 1.46722 7.10665 1.42389 7.09778ZM12 7.11111C11.9121 7.11111 11.8262 7.13718 11.7531 7.18601C11.68 7.23485 11.623 7.30426 11.5894 7.38547C11.5557 7.46669 11.5469 7.55605 11.5641 7.64226C11.5812 7.72848 11.6236 7.80767 11.6857 7.86983C11.7479 7.93198 11.8271 7.97431 11.9133 7.99146C11.9995 8.00861 12.0889 7.99981 12.1701 7.96617C12.2513 7.93253 12.3207 7.87556 12.3695 7.80248C12.4184 7.72939 12.4444 7.64346 12.4444 7.55556C12.4444 7.43768 12.3976 7.32464 12.3143 7.24129C12.2309 7.15794 12.1179 7.11111 12 7.11111ZM8.51389 8.07944e-08C8.07588 -0.000107729 7.64458 0.107681 7.25812 0.313839C6.87166 0.519998 6.54192 0.818179 6.29807 1.18203C6.05421 1.54588 5.90373 1.9642 5.85993 2.40002C5.81613 2.83584 5.88036 3.27573 6.04695 3.68083C6.39544 3.59701 6.75268 3.55495 7.11111 3.55556H10.6667C10.7847 3.5565 10.9026 3.56467 11.0197 3.58C11.1662 3.17708 11.2134 2.74481 11.1574 2.31977C11.1014 1.89473 10.9438 1.48944 10.698 1.13821C10.4522 0.786988 10.1253 0.500171 9.74512 0.302042C9.36493 0.103914 8.94261 0.000309799 8.51389 8.07944e-08Z"
        fill="#213F7D"
      />
    </g>
    <defs>
      <clipPath id="clip0_35498_796">
        <rect width="16" height="14.2222" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SVG;
