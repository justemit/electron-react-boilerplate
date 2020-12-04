import * as React from 'react'
import './hero.scss'

const Hero: React.SFC = () => (
  <div className="hero">
    <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g className="hero-apps">
          <path
            className="hero-app hero-app-14"
            d="M15 138l-4.9-.64L8 133l-2.1 4.36L1 138l3.6 3.26-.93 4.74L8 143.67l4.33 2.33-.93-4.74z"
          />
          <path
            className="hero-app hero-app-13"
            d="M897.2 114.0912l-5.2 3.63v-2.72c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.72l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z"
          />
          <path
            className="hero-app hero-app-12"
            d="M65.4 188.625h-1.6c.88 0 1.6-.7313 1.6-1.625v-1.625c0-.8937-.72-1.625-1.6-1.625h-1.6c-.88 0-1.6.7313-1.6 1.625V187c0 .8937.72 1.625 1.6 1.625h-1.6c-.88 0-1.6.7313-1.6 1.625v3.25h1.6v4.875c0 .8937.72 1.625 1.6 1.625h1.6c.88 0 1.6-.7313 1.6-1.625V193.5H67v-3.25c0-.8937-.72-1.625-1.6-1.625zm-3.2-3.25h1.6V187h-1.6v-1.625zm3.2 6.5h-1.6v6.5h-1.6v-6.5h-1.6v-1.625h4.8v1.625zm3.344-5.6875c0-3.2175-2.576-5.8337-5.744-5.8337-3.168 0-5.744 2.6162-5.744 5.8337 0 .455.048.8937.144 1.3162v3.2175c-.976-1.2512-1.6-2.8112-1.6-4.55 0-4.03 3.232-7.3125 7.2-7.3125s7.2 3.2825 7.2 7.3125c0 1.7225-.624 3.2988-1.6 4.55v-3.2175c.096-.4387.144-.8612.144-1.3162zm6.256 0c0 4.68-2.608 8.7425-6.4 10.7738v-1.7063c2.976-1.885 4.944-5.2325 4.944-9.0675 0-5.915-4.72-10.7087-10.544-10.7087-5.824 0-10.544 4.7937-10.544 10.7087 0 3.835 1.968 7.1825 4.944 9.0675v1.7063c-3.792-2.0313-6.4-6.0938-6.4-10.7738C51 179.46 56.376 174 63 174s12 5.46 12 12.1875z"
          />
          <path
            className="hero-app hero-app-11"
            d="M830.7143 142.3333c-.8643 0-1.5714.7125-1.5714 1.5834v3.1666c0 .871.707 1.5834 1.5713 1.5834h12.5714c.8643 0 1.5714-.7125 1.5714-1.5834v-3.1666c0-.871-.707-1.5834-1.5713-1.5834h-12.5714zm12.5714 2.771l-1.9643 1.979h-2.357L837 145.1043l-1.9643 1.979h-2.357l-1.9644-1.979v-1.1876h1.1786l1.964 1.979 1.9644-1.979h2.3572l1.9643 1.979 1.964-1.979h1.1787v1.1875zm-9.4286 5.1457h6.286v1.5833h-6.286V150.25zM837 136c-6.0657 0-11 4.6075-11 10.2917v7.125c0 .8708.707 1.5833 1.5714 1.5833h18.8572c.8643 0 1.5714-.7125 1.5714-1.5833v-7.125C848 140.6075 843.0657 136 837 136zm9.4286 17.4167h-18.8572v-7.125c0-4.8925 4.1486-8.851 9.4286-8.851 5.28 0 9.4286 3.9585 9.4286 8.851v7.125z"
          />
          <path
            className="hero-app hero-app-10"
            d="M75 91.8065V96h4.1935L90.376 84.8174l-4.1934-4.1935L75 91.8064zm4.1935 2.7957h-2.7957v-2.7957h1.398v1.3978h1.3977v1.398zM93.591 81.6024l-1.817 1.817-4.1935-4.1934 1.817-1.817c.5453-.5453 1.426-.5453 1.971 0l2.2226 2.2224c.5453.5452.5453 1.4258 0 1.971z"
          />
          <path
            className="hero-app hero-app-9"
            d="M797 187h4v4h-4v-4zm12-1v19c0 1.1-.9 2-2 2h-20c-1.1 0-2-.9-2-2v-24c0-1.1.9-2 2-2h15l7 7zm-2 1l-6-6h-14v22l6-10 4 8 4-4 6 6v-16z"
          />
          <path
            className="hero-app hero-app-8"
            d="M138 125c-6.62 0-12 5-12 11 0 9.04 12 21 12 21s12-11.96 12-21c0-6-5.38-11-12-11zm0 29.1c-3.72-4.06-10-12.22-10-18.1 0-4.96 4.5-9 10-9 2.68 0 5.22.96 7.12 2.72 1.84 1.72 2.88 3.94 2.88 6.28 0 5.88-6.28 14.04-10 18.1zm4-18.1c0 2.22-1.78 4-4 4-2.22 0-4-1.78-4-4 0-2.22 1.78-4 4-4 2.22 0 4 1.78 4 4z"
          />
          <path
            className="hero-app hero-app-7"
            d="M771 82h8v2h-8v-2zm0 6h8v-2h-8v2zm0 4h8v-2h-8v2zm22-10h-8v2h8v-2zm0 4h-8v2h8v-2zm0 4h-8v2h8v-2zm4-12v18c0 1.1-.9 2-2 2h-11l-2 2-2-2h-11c-1.1 0-2-.9-2-2V78c0-1.1.9-2 2-2h11l2 2 2-2h11c1.1 0 2 .9 2 2zm-16 1l-1-1h-11v18h12V79zm14-1h-11l-1 1v17h12V78z"
          />
          <path
            className="hero-app hero-app-6"
            d="M176 203h-24c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v7l7-7h13c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm0 18h-14l-4 4v-4h-6v-16h24v16z"
          />
          <path
            className="hero-app hero-app-5"
            d="M673 88.921c0 2.18-.9 4.18-2.34 5.66l-1.34-1.34c1.1-1.12 1.78-2.62 1.78-4.32 0-1.7-.68-3.22-1.78-4.32l1.34-1.34c1.44 1.44 2.34 3.44 2.34 5.66zm-8.56-11.48l-7.44 7.44h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4l7.44 7.44c.94.94 2.56.28 2.56-1.06v-20.76c0-1.34-1.62-2-2.56-1.06zm11.88.16l-1.34 1.34c2.56 2.56 4.12 6.06 4.12 9.96 0 3.88-1.56 7.4-4.12 9.96l1.34 1.34c2.9-2.9 4.68-6.9 4.68-11.32 0-4.44-1.78-8.44-4.68-11.32v.04zm-2.82 2.82l-1.38 1.34c1.84 1.84 2.96 4.38 2.96 7.16 0 2.78-1.12 5.32-2.96 7.12l1.38 1.34c2.16-2.16 3.5-5.16 3.5-8.46 0-3.3-1.34-6.32-3.5-8.5z"
          />
          <path
            className="hero-app hero-app-4"
            d="M226 79h-16c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V81c0-1.1-.9-2-2-2zm-18 4h-8v-2h8v2zm9 14c-3.88 0-7-3.12-7-7s3.12-7 7-7 7 3.12 7 7-3.12 7-7 7zm5-7c0 2.76-2.26 5-5 5s-5-2.26-5-5 2.26-5 5-5 5 2.26 5 5z"
          />
          <path
            className="hero-app hero-app-3"
            d="M725.8393 157h-15.6498c-1.1807 0-1.1807-.82-1.1807-2 0-1.18 0-2 1.1807-2h15.6298C727 153 727 153.82 727 155c0 1.18 0 2-1.1807 2h.02zm-11.6473-10c-1.1807 0-1.1807-.82-1.1807-2 0-1.18 0-2 1.1807-2h11.6273C727 143 727 143.82 727 145c0 1.18 0 2-1.1807 2H714.192zM695 146.82l2.8218-2.6 3.182 3.18 8.185-8.4 2.8218 2.82-11.0068 11-6.0038-6zM710.1895 163h15.6298C727 163 727 163.82 727 165c0 1.18 0 2-1.1807 2h-15.6298c-1.1807 0-1.1807-.82-1.1807-2 0-1.18 0-2 1.1807-2z"
          />
          <path
            className="hero-app hero-app-2"
            d="M223 152v24c0 1.65 1.35 3 3 3h36c1.65 0 3-1.35 3-3v-24c0-1.65-1.35-3-3-3h-36c-1.65 0-3 1.35-3 3zm39 0l-18 15-18-15h36zm-36 4.5l12 9-12 9v-18zm3 19.5l10.5-9 4.5 4.5 4.5-4.5 10.5 9h-30zm33-1.5l-12-9 12-9v18z"
          />
          <path
            className="hero-app hero-app-1"
            d="M648 182h-3v4.5c0 .84-.66 1.5-1.5 1.5h-6c-.84 0-1.5-.66-1.5-1.5V182h-9v4.5c0 .84-.66 1.5-1.5 1.5h-6c-.84 0-1.5-.66-1.5-1.5V182h-3c-1.65 0-3 1.35-3 3v33c0 1.65 1.35 3 3 3h33c1.65 0 3-1.35 3-3v-33c0-1.65-1.35-3-3-3zm0 36h-33v-27h33v27zm-24-33h-3v-6h3v6zm18 0h-3v-6h3v6zm-15 12h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm-24 6h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm-24 6h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm-24 6h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3zm6 0h-3v-3h3v3z"
          />
        </g>
        <g className="hero-icons" transform="translate(352.000000, 44.000000)">
          <path
            className="hero-icon hero-icon-1 hero-icon--line"
            d="M67.9100478,46.533669 C41.4232923,41.7095462 19.6934451,46.302143 11.3075829,60.8268822 C5.08594528,71.6030748 7.27151972,86.0067879 15.9285936,101.106252"
          />
          <path
            className="hero-icon hero-icon-2 hero-icon--line"
            d="M30.2849913,120.46661 C41.243568,132.509273 55.7667544,144.206588 72.8846905,154.089633 C113.69002,177.648601 156.051349,183.283871 176.168455,169.566881"
          />
          <circle
            className="hero-icon hero-icon-3 hero-icon--circle"
            cx="185"
            cy="163"
            r="11"
          />

          <path
            className="hero-icon hero-icon-4 hero-icon--line"
            d="M168.712085,117.011934 C186.053192,96.5261231 192.894725,75.4688937 184.526327,60.9744031 C178.406575,50.3746817 165.18029,45.0644667 148.184837,44.8434393"
          />
          <path
            className="hero-icon hero-icon-5 hero-icon--line"
            d="M123.879401,47.4832579 C107.838006,50.9201969 90.2641836,57.6854858 72.9698617,67.6703673 C30.9602155,91.9246478 4.57811277,127.105828 8.15869375,151.502356"
          />
          <circle
            className="hero-icon hero-icon-6 hero-icon--circle"
            cx="11"
            cy="163"
            r="11"
          />

          <path
            className="hero-icon hero-icon-7 hero-icon--line"
            d="M57.2996169,169.094663 C66.3669653,194.413962 81.1998943,210.912475 97.9595403,210.912475 C110.104945,210.912475 121.238508,202.248064 129.899251,187.841199"
          />
          <path
            className="hero-icon hero-icon-8 hero-icon--line"
            d="M140.356454,163.91057 C145.161419,148.555719 147.938898,130.403455 147.938898,110.95376 C147.938898,63.2217718 131.210891,23.3038536 108.840161,13.3705693"
          />
          <circle
            className="hero-icon hero-icon-9 hero-icon--circle"
            cx="98"
            cy="12"
            r="11"
          />

          <circle
            className="hero-icon hero-icon-10 dot"
            cx="98"
            cy="112"
            r="10"
          />
        </g>
      </g>
    </svg>
  </div>
)

export default Hero
