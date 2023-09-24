<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Sky Soft
    Author URL: https://skysoft.pw
========================================================================================== -->

<template>
  <div id="leftSidebar" class="flex flex-col contentSidebar">
    <VuePerfectScrollbar :settings="settings" :key="$vs.rtl" class="left-menu-content">
      <div class="topSidebar">
        <div class="nav-item nap-nhanh" @click="(popupActiveNapNhanh = true), getBalanceWalletClick()">
          <div class="cursor-pointer nav-link highlight">
            <span class="">{{ $t("DepositShort")}}	</span>
          </div>
        </div>

        <div class="bigger-title">{{ $t("MakeMoney")}}	</div>
        <div class="nav-item">
          <router-link to="/trading" class="cursor-pointer nav-link">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19.776" height="20.801" viewBox="0 0 19.776 20.801"
                class="non-active">
                <g id="bracket-arrow" transform="translate(0 21.189) rotate(-90)">
                  <g id="Path_30752" data-name="Path 30752" transform="translate(2.447 0)" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.5,13.385l3.226-3.5L9.5,6.391V1.5l7.743,8.388L9.5,18.276Z" stroke="none"></path>
                    <path
                      d="M 9.499995231628418 18.2755241394043 L 17.24255561828613 9.887763977050781 L 9.499995231628418 1.500003933906555 L 9.499995231628418 6.390714168548584 L 12.72606468200684 9.887763977050781 L 9.499995231628418 13.38481426239014 L 9.499995231628418 18.2755241394043 M 9.499653816223145 19.77558326721191 C 9.316328048706055 19.77558326721191 9.131294250488281 19.74194717407227 8.953784942626953 19.67254447937012 C 8.378564834594727 19.44763374328613 7.99999475479126 18.89314460754395 7.99999475479126 18.2755241394043 L 7.99999475479126 13.38481426239014 C 7.99999475479126 13.00788402557373 8.141904830932617 12.64477443695068 8.397475242614746 12.3677339553833 L 10.68527698516846 9.887763977050781 L 8.397475242614746 7.407793998718262 C 8.141904830932617 7.130753993988037 7.99999475479126 6.767643928527832 7.99999475479126 6.390714168548584 L 7.99999475479126 1.500003933906555 C 7.99999475479126 0.8823840022087097 8.378564834594727 0.3278939723968506 8.953784942626953 0.1029839739203453 C 9.131258964538574 0.03359496966004372 9.316363334655762 -5.543701263377443e-05 9.499653816223145 -5.543701263377443e-05 C 9.910433769226074 -5.543701263377443e-05 10.31252574920654 0.1687753796577454 10.60219478607178 0.4825839698314667 L 18.34475517272949 8.870344161987305 C 18.87515449523926 9.444933891296387 18.87515449523926 10.33059406280518 18.34475517272949 10.90518379211426 L 10.60219478607178 19.29294395446777 C 10.31255149841309 19.60672569274902 9.910395622253418 19.77558326721191 9.499653816223145 19.77558326721191 Z"
                      stroke="none" fill="#fff" class="fill-color"></path>
                  </g>
                  <g id="Path_30753" data-name="Path 30753" transform="translate(1.389 1.685)" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6.687,14.905.5,8.2,6.687,1.5V5.408L4.109,8.2,6.687,11Z" stroke="none"></path>
                    <path
                      d="M 6.686956405639648 14.90506172180176 L 6.686956405639648 10.99697208404541 L 4.10905647277832 8.202531814575195 L 6.686956405639648 5.408092021942139 L 6.686956405639648 1.500001788139343 L 0.4999963045120239 8.202531814575195 L 6.686956405639648 14.90506172180176 M 6.687297821044922 16.40512084960938 C 6.276517391204834 16.40512084960938 5.874425888061523 16.23628997802734 5.584756374359131 15.92248153686523 L -0.6022037267684937 9.219951629638672 C -1.132603645324707 8.64536190032959 -1.132603645324707 7.759701728820801 -0.6022037267684937 7.185111999511719 L 5.584756374359131 0.4825818240642548 C 5.87440013885498 0.1688009202480316 6.276555061340332 -5.759948908234946e-05 6.687297821044922 -5.759948908234946e-05 C 6.870623588562012 -5.759948908234946e-05 7.055656909942627 0.03357908129692078 7.233166217803955 0.1029818132519722 C 7.808386325836182 0.3278918266296387 8.186956405639648 0.882381796836853 8.186956405639648 1.500001788139343 L 8.186956405639648 5.408092021942139 C 8.186956405639648 5.785021781921387 8.045045852661133 6.148131847381592 7.78947639465332 6.425171852111816 L 6.149843215942383 8.202531814575195 L 7.78947639465332 9.979891777038574 C 8.045045852661133 10.25693225860596 8.186956405639648 10.620041847229 8.186956405639648 10.99697208404541 L 8.186956405639648 14.90506172180176 C 8.186956405639648 15.52268218994141 7.808386325836182 16.07717132568359 7.233166217803955 16.30208206176758 C 7.055692195892334 16.3714714050293 6.870587825775146 16.40512084960938 6.687297821044922 16.40512084960938 Z"
                      stroke="none" fill="#fff" class="fill-color"></path>
                  </g>
                </g>
              </svg></span>
            <span class="textLink">{{ $t("Trade") || "Trade" }}</span>
          </router-link>
        </div>

        <div class="nav-item">
          <router-link to="/user/trade/copytrade" class="cursor-pointer nav-link">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-edit">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg></span>
            <span class="textLink">Copy Trade</span>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/user/affiliate/general" class="cursor-pointer nav-link">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21"
                height="23" viewBox="0 0 21 23" class="non-active">
                <defs>
                  <clipPath id="aff-clip-path">
                    <rect width="21" height="23" fill="none"></rect>
                  </clipPath>
                </defs>
                <g id="aff" clip-path="url(#aff-clip-path)">
                  <g id="aff-2" data-name="aff" transform="translate(-0.1 0.5)">
                    <line id="Line_1252" data-name="Line 1252" y1="3.29" x2="5.265" transform="translate(7.968 5.855)"
                      fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                      stroke-width="2" class="stroke-color"></line>
                    <line id="Line_1253" data-name="Line 1253" x2="5.265" y2="3.29" transform="translate(7.968 12.855)"
                      fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                      stroke-width="2" class="stroke-color"></line>
                    <circle id="Ellipse_1366" data-name="Ellipse 1366" cx="3.5" cy="3.5" r="3.5"
                      transform="translate(13.1 0.5)" stroke-width="2" stroke="#fff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle>
                    <circle id="Ellipse_1367" data-name="Ellipse 1367" cx="3.5" cy="3.5" r="3.5"
                      transform="translate(13.1 14.5)" stroke-width="2" stroke="#fff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle>
                    <circle id="Ellipse_1368" data-name="Ellipse 1368" cx="3.5" cy="3.5" r="3.5"
                      transform="translate(1.1 7.5)" stroke-width="2" stroke="#fff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle>
                  </g>
                </g>
              </svg></span>
            <span class="textLink">{{ $t("Vip") || "Vip" }}</span>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/user/affiliate/championship" class="cursor-pointer nav-link">
            <span>
              <svg version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="228px" height="228px" viewBox="-3.72 -3.72 69.44 69.44" enable-background="new 0 0 62 64" xml:space="preserve" fill="#ffffff" stroke="#ffffff">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <title>Cup</title> <desc>Created with Sketch.</desc> <g id="Page-1" sketch:type="MSPage"> <g id="Cup" transform="translate(1.000000, 1.000000)" sketch:type="MSLayerGroup"> <path id="Shape_1_" sketch:type="MSShapeGroup" fill="none" stroke="#ffffff" stroke-width="3.534" d="M11.5,4H0.1c0,0-2.4,30,24.5,30 "/> <path id="Shape_2_" sketch:type="MSShapeGroup" fill="none" stroke="#ffffff" stroke-width="3.534" d="M49.1,4h10.8 c0,0,2.5,30-23.6,30"/> <path id="Shape_3_" sketch:type="MSShapeGroup" fill="none" stroke="#ffffff" stroke-width="3.534" d="M19.2,55v-2c0-1.1,0.9-2,2.1-2 l4.1-1c2-5,2.4-7.9,2.1-12h-1c-1.2,0-2.1-0.9-2.1-2.1v-3.1C13.3,28,11,10.4,11,0h39c0,10.5-2.3,28.1-13.4,32.8v3.1 c0,1.2-1,2.1-2.1,2.1h-0.8c-0.3,4.1,0,7.1,2,12l5.1,1c1.1,0,2.1,0.9,2.1,2v2"/> <path id="Shape_4_" sketch:type="MSShapeGroup" fill="none" stroke="#ffffff" stroke-width="3.534" d="M15.8,4.2 c0,0,0.5,17.9,6.9,22.8"/> <path id="Shape" sketch:type="MSShapeGroup" fill="none" stroke="#ffffff" stroke-width="3.534" d="M39,55h6.1c1.1,0,3.9,5,3.9,5 c0,1.1-0.9,2-1.9,2H15c-1.1,0-1.9-0.9-1.9-2c0,0,2.8-5,3.9-5h6.1"/> </g> </g> </g>

              </svg>
            </span>
            <span class="textLink">{{ $t("Championship") || "Championship" }}</span>
          </router-link>
        </div>
        <div class="bigger-title">{{ $t("ManagerProfile")}}	</div>
        <div class="mobileA nav-item mobileShow">
          <router-link to="/user/user-profile" class="cursor-pointer nav-link">
            <span>
              <svg style="color: #fff" class="block text-center" xmlns="http://www.w3.org/2000/svg" version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512"
                x="0" y="0" viewBox="0 0 512 512" xml:space="preserve">
                <g>
                  <path xmlns="http://www.w3.org/2000/svg"
                    d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-325.914062 354.316406c8.453125-72.734375 70.988281-128.890625 144.894531-128.890625 38.960938 0 75.597656 15.179688 103.15625 42.734375 23.28125 23.285156 37.964844 53.6875 41.742188 86.152344-39.257813 32.878906-89.804688 52.707031-144.898438 52.707031s-105.636719-19.824219-144.894531-52.703125zm144.894531-159.789063c-42.871094 0-77.753906-34.882812-77.753906-77.753906 0-42.875 34.882812-77.753906 77.753906-77.753906s77.753906 34.878906 77.753906 77.753906c0 42.871094-34.882812 77.753906-77.753906 77.753906zm170.71875 134.425782c-7.644531-30.820313-23.585938-59.238282-46.351562-82.003906-18.4375-18.4375-40.25-32.269532-64.039063-40.9375 28.597656-19.394532 47.425781-52.160157 47.425781-89.238282 0-59.414062-48.339844-107.753906-107.753906-107.753906s-107.753906 48.339844-107.753906 107.753906c0 37.097656 18.84375 69.875 47.464844 89.265625-21.886719 7.976563-42.140626 20.308594-59.566407 36.542969-25.234375 23.5-42.757812 53.464844-50.882812 86.347656-34.410157-39.667968-55.261719-91.398437-55.261719-147.910156 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 56.523438-20.859375 108.265625-55.28125 147.933594zm0 0"
                    fill="#fff" data-original="#fff"></path>
                </g>
              </svg>
            </span>
            <span class="textLink">{{ blObj.displayName }}</span>
          </router-link>

        </div>
        
        <div class="nav-item">
          <router-link to="/user/trade/history" class="cursor-pointer nav-link">
            <span><svg id="speedometer" xmlns="http://www.w3.org/2000/svg" width="17.809" height="17.809"
                viewBox="0 0 17.809 17.809" class="non-active">
                <path id="Path_30761" data-name="Path 30761"
                  d="M9.995,9.995a2.226,2.226,0,0,0,0-3.149C9.125,5.978,1,1,1,1S5.978,9.125,6.846,9.995A2.226,2.226,0,0,0,9.995,9.995Z"
                  transform="translate(0.484 0.484)" fill="#fff" class="fill-color"></path>
                <path id="Path_30762" data-name="Path 30762"
                  d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z"
                  fill="#fff" class="fill-color"></path>
              </svg></span>
            <span class="textLink">{{ $t("Dashboard") || "Dashboard" }}</span>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/user/balance" class="cursor-pointer nav-link">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19.815" height="16.846" viewBox="0 0 19.815 16.846"
                class="non-active iconWallet">
                <g id="_000000ff" data-name="#000000ff" transform="translate(-42.663 -106.619)">
                  <path id="Path_30756" data-name="Path 30756"
                    d="M45.072,106.675a3.344,3.344,0,0,1,.674-.054H58.933a5.487,5.487,0,0,1,1.171.061,2.972,2.972,0,0,1,2.374,2.926q0,5.458,0,10.916a2.985,2.985,0,0,1-2.939,2.94H46.391a5.837,5.837,0,0,1-1.532-.1,3,3,0,0,1-2.11-2.16,3.184,3.184,0,0,1-.085-.815q0-5.389,0-10.777a2.946,2.946,0,0,1,.652-1.866,2.985,2.985,0,0,1,1.756-1.066m-.426,2.89q0,5.454,0,10.908a1,1,0,0,0,1.007,1.008H59.49a1,1,0,0,0,1-.96c0-.671.008-1.343,0-2.014-1.494,0-2.988,0-4.482,0a3.467,3.467,0,0,1,.048-6.934H60.5q0-1,0-2.01a.99.99,0,0,0-.957-.961q-6.944,0-13.887,0a1,1,0,0,0-1,.963m9.934,5.193a1.5,1.5,0,0,0,.825,1.627,2.538,2.538,0,0,0,1.159.143c1.311,0,2.622,0,3.933,0,0-.99,0-1.98,0-2.97-1.5,0-2.994,0-4.491,0A1.492,1.492,0,0,0,54.58,114.758Z"
                    fill="#fff" class="fill-color"></path>
                </g>
              </svg></span>
            <span class="textLink">{{ $t("Wallet") || "Wallet" }}</span>
          </router-link>
        </div>

        <div class="nav-item mobileShow">
          <a @click.stop="toggleDataSidebarHisOrder()" class="cursor-pointer nav-link">
            <span>
              <span class="noticeCmdN" v-if="blObj.Notify">{{ blObj.Notify }}</span>
              <svg data-v-7b375aca="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22.633 21.223"><g data-v-7b375aca="" id="transfer" transform="translate(-25.599 -35.35) rotate(-30)"><g data-v-7b375aca="" id="Group_13372" data-name="Group 13372" transform="translate(0 51.198)"><path data-v-7b375aca="" id="Path_30757" data-name="Path 30757" d="M17.79,55.881,13.3,51.386a.642.642,0,0,0-1.1.454v1.926H7.7a.642.642,0,0,0,0,1.284h5.137a.642.642,0,0,0,.642-.642V53.39l2.945,2.945L13.484,59.28V58.261a.642.642,0,0,0-.642-.642H5.778V55.693a.642.642,0,0,0-1.1-.454L.188,59.734a.642.642,0,0,0,0,.908l4.495,4.495a.642.642,0,0,0,.454.188.634.634,0,0,0,.246-.049.642.642,0,0,0,.4-.593V62.756h4.495a.642.642,0,1,0,0-1.284H5.136a.642.642,0,0,0-.642.642v1.018L1.55,60.187l2.945-2.945v1.018a.642.642,0,0,0,.642.642H12.2V60.83a.642.642,0,0,0,1.1.454l4.495-4.495A.642.642,0,0,0,17.79,55.881Z" transform="translate(0 -51.198)" fill="#ffffff" class="fill-color"></path></g></g></svg>
            </span>
            <span class="textLink">{{ $t("Command") || "Command" }}</span>
          </a>
        </div>

        <div class="bigger-title mobileShow">{{ $t("Settings") || "Settings" }}</div>
        <div class="mobileA nav-item mobileShow">
          <a @click="popupActiveCaiDat = true" class="cursor-pointer nav-link">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512" xml:space="preserve">
                <g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M500.633,211.454l-58.729-14.443c-3.53-11.133-8.071-21.929-13.55-32.256c8.818-14.678,27.349-45.571,27.349-45.571    c3.545-5.903,2.607-13.462-2.256-18.325l-42.422-42.422c-4.863-4.878-12.407-5.815-18.325-2.256L347.055,83.53    c-10.269-5.435-21.006-9.932-32.065-13.433l-14.443-58.729C298.876,4.688,292.885,0,286,0h-60    c-6.885,0-12.891,4.688-14.546,11.367c0,0-10.005,40.99-14.429,58.715c-11.792,3.735-23.188,8.584-34.043,14.502l-47.329-28.403    c-5.918-3.516-13.447-2.607-18.325,2.256l-42.422,42.422c-4.863,4.863-5.801,12.422-2.256,18.325l29.268,48.882    c-4.717,9.302-8.672,18.984-11.821,28.901l-58.729,14.487C4.688,213.124,0,219.115,0,226v60c0,6.885,4.688,12.891,11.367,14.546    l58.744,14.443c3.56,11.294,8.188,22.266,13.799,32.798l-26.191,43.652c-3.545,5.903-2.607,13.462,2.256,18.325l42.422,42.422    c4.849,4.849,12.407,5.771,18.325,2.256c0,0,29.37-17.607,43.755-26.221c10.415,5.552,21.313,10.137,32.549,13.696l14.429,58.715    C213.109,507.313,219.115,512,226,512h60c6.885,0,12.876-4.688,14.546-11.367l14.429-58.715    c11.558-3.662,22.69-8.394,33.281-14.136c14.78,8.862,44.443,26.66,44.443,26.66c5.903,3.53,13.462,2.622,18.325-2.256    l42.422-42.422c4.863-4.863,5.801-12.422,2.256-18.325l-26.968-44.927c5.317-10.093,9.727-20.654,13.169-31.523l58.729-14.443    C507.313,298.876,512,292.885,512,286v-60C512,219.115,507.313,213.124,500.633,211.454z M256,361c-57.891,0-105-47.109-105-105    s47.109-105,105-105s105,47.109,105,105S313.891,361,256,361z"
                        fill="#fff" data-original="#fff"></path>
                    </g>
                  </g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                  <g xmlns="http://www.w3.org/2000/svg"></g>
                </g>
              </svg>
            </span>
            <span class="textLink">{{ $t("Settings") || "Settings" }}</span>
          </a>
        </div>
      </div>
    </VuePerfectScrollbar>

    <div class="footer mobileHide">
      <div class="mobileA nav-item">
        <a @click="logOut()" class="cursor-pointer nav-link">
          <span>
            <svg data-v-5058a5bc="" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
              class="mr-2 iconLabel">
              <g data-v-5058a5bc="" id="log-out" transform="translate(0 -1)">
                <path data-v-5058a5bc="" id="Path_29008" data-name="Path 29008"
                  d="M6.5,5.5v-3a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v12a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1v-3" fill="none"
                  stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"
                  class="stroke-color"></path>
                <line data-v-5058a5bc="" id="Line_1254" data-name="Line 1254" x1="11" transform="translate(0.5 8.5)"
                  fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                  stroke-width="1" class="stroke-color"></line>
                <path data-v-5058a5bc="" id="Path_29009" data-name="Path 29009" d="M3.5,5.5l-3,3,3,3" fill="none"
                  stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"
                  class="stroke-color"></path>
              </g>
            </svg>
          </span>
          <span class="textLink">{{ $t("Logout") || "Logout" }}</span>
        </a>
      </div>
    </div>

    <vs-popup class="setting" fullscreen title="Cài Đặt" :active.sync="popupActiveCaiDat">

      <div class="relative flex flex-col wrap">
        <div class="flex p-3 mb-3 line line-language-pc line-pc align-center">
          <div class="flex flex-1 type align-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="colorWhite">
              <g id="globe" transform="translate(-0.324 -0.324)" opacity="1">
                <line id="Line_1450" data-name="Line 1450" y2="18" transform="translate(9.824 0.824)" fill="none"
                  stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="1"></line>
                <line id="Line_1451" data-name="Line 1451" x2="18" transform="translate(0.824 9.824)" fill="none"
                  stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="1"></line>
                <ellipse id="Ellipse_1795" data-name="Ellipse 1795" cx="5.042" cy="8.824" rx="5.042" ry="8.824"
                  transform="translate(4.782 1)" fill="none" stroke="#FFFFFF" stroke-linecap="square" stroke-miterlimit="10"
                  stroke-width="1"></ellipse>
                <line id="Line_1452" data-name="Line 1452" x2="14.931" transform="translate(2.359 5.118)" fill="none"
                  stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="1"></line>
                <line id="Line_1453" data-name="Line 1453" x2="14.931" transform="translate(2.359 14.53)" fill="none"
                  stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="1"></line>
                <circle id="Ellipse_1796" data-name="Ellipse 1796" cx="9" cy="9" r="9" transform="translate(0.824 0.824)"
                  fill="none" stroke="#FFFFFF" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></circle>
              </g>
            </svg>
            <span class="ml-2 colorWhite">{{ $t("Language") || "Language" }}</span>
          </div>
          <div class="flex flex-1 control align-center">
            <i18n />
          </div>
        </div>
        <div class="flex p-3 mb-3 line align-center">
          <div class="flex flex-1 type align-center colorWhite" >
            <svg version="1.1" width="19" height="19" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 19" xml:space="preserve">
              <g id="sound" transform="translate(0.5 -0.5)">
                <g id="Path_30736" fill="#FFFFFF">
                  <path
                    d="M13.7,19.3c-0.2,0-0.4-0.1-0.6-0.2l-6.9-4.6H0.5c-0.6,0-1-0.4-1-1V6.3c0-0.6,0.4-1,1-1h5.7l6.9-4.6c0.3-0.2,0.7-0.2,1,0c0.3,0.2,0.5,0.5,0.5,0.9v16.8c0,0.4-0.2,0.7-0.5,0.9C14,19.3,13.9,19.3,13.7,19.3z M1.5,12.5h5c0.2,0,0.4,0.1,0.6,0.2l5.6,3.8V3.4L7.1,7.1C6.9,7.2,6.7,7.3,6.5,7.3h-5V12.5z"
                    class="st0"></path>
                </g>
                <g id="Path_30737" fill="#FFFFFF">
                  <path
                    d="M16.8,15.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c1.9-2,1.9-5.1-0.1-7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c2.8,2.7,2.8,7.1,0.1,9.9c0,0-0.1,0.1-0.1,0.1C17.2,15,17,15.1,16.8,15.1z"
                    class="st0"></path>
                </g>
              </g>
            </svg>
            <span class="ml-2 colorWhite">{{ $t("Sound") || "Sound" }}</span>
          </div>
          <div class="flex flex-1 control align-center">
            <div class="flex toggleButtonWrapper">
              <span class="mr-2 uppercase white">Off</span>
              <vs-switch color="success" style="border: 1px solid #4e4e4e; min-width: 60px" v-model="switchAmThanh"
                @change="OnOffSound" />
              <span class="ml-2 uppercase white">On</span>
            </div>
          </div>
        </div>
        
      </div>
      <div class="setting-mobile-logout">
          <a @click="logOut()" class="cursor-pointer nav-link">
            <span>
              <svg data-v-5058a5bc="" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
                class="mr-2 iconLabel">
                <g data-v-5058a5bc="" id="log-out" transform="translate(0 -1)">
                  <path data-v-5058a5bc="" id="Path_29008" data-name="Path 29008"
                    d="M6.5,5.5v-3a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v12a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1v-3" fill="none"
                    stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"
                    class="stroke-color"></path>
                  <line data-v-5058a5bc="" id="Line_1254" data-name="Line 1254" x1="11" transform="translate(0.5 8.5)"
                    fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                    stroke-width="1" class="stroke-color"></line>
                  <path data-v-5058a5bc="" id="Path_29009" data-name="Path 29009" d="M3.5,5.5l-3,3,3,3" fill="none"
                    stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"
                    class="stroke-color"></path>
                </g>
              </svg>
            </span>
            <span class="textLink">{{ $t("Logout") || "Logout" }}</span>
          </a>
        </div>
    </vs-popup>

    <ho-so-user-info :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
    <!-- <his-order-bet :isSidebarActive="$store.state.isOpenSideBar" @closeSidebar="toggleDataSidebarHisOrder"/> -->

    <vs-popup class="qDeposit" title="" :active.sync="popupActiveNapNhanh">
      <div class="relative">
        <vs-button color="#38495d" type="filled" class="w-full text-left" @click="showPopWalSL = !showPopWalSL">
          <span class="icon USDT"></span>
          <span class="white">{{ balanceUSDT }}</span>
          <feather-icon class="right-0 material-icons" icon="ChevronDownIcon" svgClasses="w-4 h-4"
            style="top: -3px; position: absolute !important" />
        </vs-button>
        <div class="w-full listWallShow" :class="{ block: showPopWalSL }">
          <span class="block w-full cursor-pointer drop" @click="selectWallet('usdt')">
            <span class="icon USDT"></span>
            <span class="white">{{ balanceUSDT }}</span>
          </span>
        </div>
        <p class="mt-4 mb-2 text-xs white">Tiền Nạp</p>
        <div class="relative">
          <vs-input class="w-full" placeholder="Vui lòng nhập tiền nạp" @keyup="ttThucNhan" v-model="enterMoneyDeposit" />
          <span class="cursor-pointer allIn" @click="allEnterWallet()">
            <span class="uppercase">Tất cả</span>
          </span>
        </div>

        <p class="mt-4 mb-4 text-right noticeDeposit">
          <small>Giá trị nạp tối thiểu là $11</small>
        </p>
        <div class="sizeLarge">
          <p class="mb-2 white title">*Tổng sẽ nhận</p>
          <p title="0.00" class="mb-2 text-3xl receiveAmount white">
            ${{ ttNhan }}
          </p>
        </div>

        <vs-button class="w-full" color="success" icon-pack="feather" type="relief"
          @click="(popupActiveNapNhanh = false), submitDeposit()">Nạp tiền ngay</vs-button>

        <p class="mt-2 text-center noticeDeposit">
          <small>*Giá báo có thể thay đổi</small>
        </p>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import getData from "@/pages/trade/navbar/components/data.json";
import HoSoUserInfo from "@/pages/trade/slidebar/HoSoUser";
import I18n from "./i18n";
import AuthenticationService from "@/services/AuthenticationService";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import HisOrderBet from '@/pages/trade/slidebar/HisOrderBet.vue';

export default {
  components: {
    I18n,
    HoSoUserInfo,
    VuePerfectScrollbar,
    // HisOrderBet
  },
  data() {
    return {
      blObj: getData,
      switchAmThanh: true,
      popupActiveCaiDat: false,
      addSidebarHisOrder: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      popupActiveNapNhanh: false,
      balanceUSDT: 0,
      enterMoneyDeposit: "",
      walletIsSelect: "usdt",
      showPopWalSL: false,
      ttNhan: 0.0,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      activeGames: {
        champion: false,
        lucky: false,
      },
    };
  },

  methods: {
    logOut() {
      localStorage.removeItem("tokenUser");
      localStorage.removeItem("INFO");
      // xóa notice = 0
      getData.Notify = 0;
      localStorage.removeItem("stateOpen");
      // This is just for demo Purpose. If user clicks on logout -> redirect
      //this.$router.push('/login').catch(() => {})
      window.location.href = window.location.origin + "/login";
    },

    viewHoSo() {
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    getBalanceWalletClick() {
      AuthenticationService.getBalanceWallet().then((res) => {
        if (res.data.success) {
          let mU = res.data.data.usdt;
          this.balanceUSDT = this.formatPrice(mU, 2);
        }
      });
    },

    selectWallet(val) {
      this.walletIsSelect = val;
      this.showPopWalSL = false;
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    ttThucNhan(e) {
      let amount = e.currentTarget.value;
      amount = this.replaceAll(amount, ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      this.ttNhan = this.formatPrice(amount, 2);
    },

    submitDeposit() {
      let amount = this.ttNhan;

      amount = this.replaceAll(amount.toString(), ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (amount < 11) {
        return this.$vs.notify({
          text: "Số tiền tối thiểu không đủ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let obj = {
        money: amount,
        id: getData.uidLive,
      };

      AuthenticationService.depositWallet(obj).then((res) => {
        if (res.data.success == 1) {
          getData.balance -= amount;
          getData.blLive += amount;

          this.$vs.notify({
            text: "Nạp tiền thành công.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        } else if (res.data.success == 3) {
          this.$vs.notify({
            text: "Số dư bạn không đủ.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        } else {
          this.$vs.notify({
            text: "Giá trị không hợp lệ",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      });
    },

    allEnterWallet() {
      this.ttNhan = this.formatPrice(getData.balance, 2);
      this.enterMoneyDeposit = this.formatPrice(getData.balance, 2);
    },

    OnOffSound() {
      if (this.switchAmThanh) {
        localStorage.setItem("SOUND", true);
      } else {
        localStorage.setItem("SOUND", false);
      }
    },
    toggleDataSidebarHisOrder() {
      this.$store.commit("TOGGLE_IS_OPEN_SIDEBAR");
    },
  },

  created() {
    AuthenticationService.getActiveGames().then((res) => {
      this.activeGames = res.data;
    });
  },
};
</script>

<style scoped lang="scss">
.qDeposit .allIn {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  color: #00ffe9;
}

.qDeposit .listWallShow {
  position: absolute;
  z-index: 1000;
  display: none;
  background-color: #38495d;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.qDeposit .listWallShow .drop {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

.mobileShow {
  display: none;
}

.left-menu-content {
  max-height: calc((var(--vh, vh) * 100) - 150px);
}

.footer {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  padding: 1.2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: calc(100% - 1.2rem * 2);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
}

@media screen and (max-width: 768px) {
  .mobileShow {
    display: block;
  }

  .mobileHide {
    display: none;
  }
}

.noticeCmdN {
  position: absolute;
  margin-left: 13px;
  margin-top: -18px;
  border-radius: 50%;
  background: #e22a67;
  width: 20px;
  height: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  width: 100%;
}

.nav-item .nav-link {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  background-color: #1f2f53;
  font-weight: 400 !important;
  color: #fff;
  font-size: 1rem !important;
  margin-bottom: 1rem;
  border-radius: 4px;
  padding: 0.75rem;

  &>span:first-child {
    svg {
      height: 20px !important;
      width: 20px !important;
    }

    display: flex;
    align-items: center;
    margin-right: 10px;
  }
}

.nav-item .championship {
  position: relative;
}

.nav-item .icon-live {
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
}

.v-nav-menu .feather-icon {
  margin-right: 0;
}

.v-nav-menu a {
  padding: 10px;
}

.v-nav-menu .router-link-active .textLink {
  background: transparent;
  box-shadow: none;
  color: #fff !important;
}

.v-nav-menu .router-link-active {
  background: #389a11 !important;
}

.v-nav-menu .router-link-active .fill-color {
  fill: #fff;
}

.v-nav-menu .router-link-active .stroke-color {
  stroke: #fff;
}

@media screen and (min-width: 968px) {
  .v-nav-menu .router-link-active .textLink {
    background: transparent;
    box-shadow: none;
    color: #389a11 !important;
  }

  .v-nav-menu .router-link-active {
    background: #389a11 !important;
  }

  .v-nav-menu .router-link-active .fill-color {
    fill: #389a11;
  }

  .v-nav-menu .router-link-active .stroke-color {
    stroke: #389a11;
  }

  .footer {
    bottom: 40px;
    padding: 10px;

    &::before {
      width: calc(100% - 20px);
    }
  }
}

#leftSidebar {
  padding: 0 1.25rem;
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 99999999;
  max-height: calc((var(--vh, vh) * 100) - 150px);
}

#leftSidebar .nav-link {
  position: relative;
}

#leftSidebar .nav-link.highlight {
  background: #389a11;
  justify-content: center !important;
}

#leftSidebar .nav-link.new:before {
  position: absolute;
  top: 0;
  right: 15px;
  background: url("~@/assets/images/sky/icon-new.svg");
  display: block;
  overflow: hidden;
  width: 25px;
  height: 21px;
  content: "";
  background-size: 100% 100%;
}

.iconLive {
  position: absolute;
  top: 18px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -ms-flex-item-align: center;
  align-self: center;
}

.textLink {
  color: rgba(255, 255, 255, 0.5);
  text-transform: unset;
  word-wrap: break-word;
  /* IE 5.5-7 */
  white-space: -moz-pre-wrap;
  /* Firefox 1.0-2.0 */
  white-space: pre-wrap;
  /* current browsers */
  font-size: 16px;
}

.topSidebar {
  justify-content: space-between;
  z-index: 99;
  margin-top: 10px;

  .bigger-title {
    font-size: 20px;
    color: #fff;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
}

@media screen and (min-width: 968px) {
  #leftSidebar {
    padding: 10px !important;

    .nap-nhanh {
      display: none;
    }

    .nav-link {
      background: unset !important;
      padding: 0;
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
  }

  .nav-link {
    flex-direction: column;
    align-items: center;
    padding: 0;
    max-width: 100%;

    .textLink {
      text-align: center;
      width: 100%;
    }

    &>span:first-child {
      margin-right: 0px !important;
    }
  }

  .nav-link.highlight {
    background: unset !important;
  }

  .bigger-title {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #leftSidebar {
    max-height: calc((var(--vh, vh) * 100) - 100px);
  }

  .left-menu-content {
    max-height: calc((var(--vh, vh) * 100) - 100px);
  }

  .mobileShow {
    display: block;
  }

  .mobileHide {
    display: none;
  }
}

@media screen and (max-width: 689px) {
  #leftSidebar {
    overflow: auto;
  }
}
</style>
<style>
.v-nav-menu a .truncate {
  white-space: initial !important;
}
</style>
