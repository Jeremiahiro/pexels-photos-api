<template>
<div class="">
    <nav 
        class="flex items-center justify-between flex-wrap p-3 fixed w-full z-10 top-0"
        :class="{'bg-gray-800' : isScrollPassed || isToggled }"
    >
        <div class="flex items-center flex-shrink-0 text-white lg:mr-6">
            <nuxt-link 
                class="inline-flex text-white no-underline hover:text-white hover:no-underline" 
                :to="{ name: 'index' }">
                <img class="rounded-lg w-8 h-8 mr-2" src="~/assets/images/pexel_logo.png" alt="">
                <span class="hidden md:block text-2xl pl-2">
                    Pexels 
                </span>
            </nuxt-link>
        </div>

        <div
            v-show="isScrollPassed || isToggled"
            class="flex transition-opacity ease-linear w-8/12 lg:w-7/12"
        >
          <div class="w-full">
              <GeneralSearchInput />
          </div>
        </div>
        
        <div class="block lg:hidden">
            <button
                id="nav-toggle"
                @click="toggleNav"
                class="navbar-burger flex items-center px-3 py-2 rounded text-gray-500 border-gray-600 hover:text-white "
                >
                <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>

        <div 
            class="bg:gray-600 lg:bg-auto relative z-10 w-full flex-grow lg:flex lg:items-center lg:w-3/12 hidden lg:block pt-6 lg:pt-0"
            id="nav-content"
        >
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="lg:mr-3">
                    <div
                        class="w-full inline-block py-2 text-white no-underline group relative"
                        >
                        <nuxt-link
                            :to="{ name: 'index' }"
                            class="lg:font-semibold font-medium text-base"
                            >
                            <span class="lg:hidden block">Home</span>
                            <span class="hidden lg:block">Explore</span>
                        </nuxt-link>
                        <div class="block lg:hidden w-100 my-2 border-b-2"></div>
                        <ul 
                            class="explore-menu lg:origin-top-right lg:absolute lg:right-0 lg:top-10 lg:w-48 block lg:hidden lg:text-black lg:bg-white text-white pt-1 group-hover:block">
                            <li class="">
                                <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                >
                                    Discover Photos
                                </nuxt-link>
                            </li>
                            <li class="">
                                <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                >
                                    Popular Searches
                                </nuxt-link>
                            </li>
                            <li class="">
                                <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 lg:p-0 py-1 no-underline hover:bg-gray-300"
                                >
                                    Leaderboard
                                </nuxt-link>
                            </li>
                            <li class="">
                                <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 lg:p-0 py-1 no-underline hover:bg-gray-300"
                                >
                                    Challenges
                                </nuxt-link>
                            </li>
                            <li class="">
                                <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 lg:p-0 py-1 no-underline hover:bg-gray-300"
                                >
                                    Free Videos
                                </nuxt-link>
                            </li>
                            <li class="">
                                <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                >
                                    Pexels Blog
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="lg:mr-3">
                    <nuxt-link 
                        :to="{ name: 'photos' }"
                        class="lg:font-semibold font-medium text-base hidden lg:block inline-block py-2 px-4 text-white no-underline"
                    >
                        Licence
                    </nuxt-link>
                </li>
                <li class="lg:mr-3">
                    <nuxt-link 
                        :to="{ name: 'photos' }"
                        class="lg:font-semibold font-medium text-base hidden lg:block inline-block py-2 px-4 text-white no-underline"
                    >
                        Upload
                    </nuxt-link>
                </li>
                <li class="lg:mr-3">
                 <div class="inline-block w-full text-white no-underline group relative">
                        <button
                            class="lg:pt-2 hidden lg:block"
                            >
                            <span class="pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </span>
                        </button>
                        <div class="more-menu lg:origin-top-right lg:absolute lg:right-0 lg:top-8 w-full lg:w-72 block lg:hidden lg:text-black text-white lg:bg-white lg:pt-1 group-hover:block">
                        <div class="block lg:hidden w-full my-2 border-b-2"></div>
                            <ul>
                                <li class="">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                        >
                                        Login
                                    </nuxt-link>
                                </li>
                                <li class="">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                    >
                                        Join
                                    </nuxt-link>
                                </li>
                                <li class="">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-flex lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                    >
                                        Change Language
                                       <img
                                        width="36"
                                        height="26"
                                        class="ml-2"
                                        src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png"
                                        >
                                    </nuxt-link>
                                </li>
                                <li class="lg:hidden block">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                    >
                                        Licence
                                    </nuxt-link>
                                </li>
                                <div class="block lg:hidden w-100 my-2 border-b-2"></div>
                                <li class="lg:block hidden">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                        >
                                        Image &amp; Video API
                                    </nuxt-link>
                                </li>
                                <li class="">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                        >
                                        Apps &amp; Plugins
                                    </nuxt-link>
                                </li>
                                <li class="">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                    >
                                        FAQ
                                    </nuxt-link>
                                </li>
                                <li class="lg:block hidden">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                    >
                                        Partnerships
                                    </nuxt-link>
                                </li>
                                <li class="">
                                    <nuxt-link 
                                    :to="{ name: 'photos' }"
                                    class="w-full lg:font-medium text-base inline-block lg:px-4 lg:py-2 py-1 no-underline hover:bg-gray-300"
                                    >
                                        Imprint &amp; Terms
                                    </nuxt-link>
                                </li>
                                <div class="block lg:hidden w-100 my-1 border-b-2"></div>
                            </ul>
                            <ul class="inline-flex justify-between items-center w-full">
                                <li class="">
                                    <a 
                                        href="#"
                                        class="inline-block py-2 px-4 no-underline hover:bg-gray-300"
                                    >
                                        <svg viewBox="0 0 20 20" class="h-6 w-6" fill="currentColor" stroke="">
                                            <path 
                                                d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                    <li class="">
                                    <a 
                                        href="#"
                                        class="inline-block py-2 px-4 no-underline hover:bg-gray-300"
                                    >
                                        <svg viewBox="0 0 20 20" class="h-6 w-6" fill="currentColor" stroke="">
                                            <path 
                                                d="M11.039,14.123c-0.231-0.129-0.414-0.303-0.498-0.518C10.53,13.568,10.54,9.17,10.54,9.17h3.253V6.75h-3.25V3.5L8.474,3.512C8.386,4.181,8.225,4.733,7.991,5.167C7.756,5.601,7.445,5.972,7.059,6.281C6.673,6.592,6.208,6.828,5.665,6.994l0.001,2.194L7.293,9.17v4.215c0,0.594,0.067,1.047,0.198,1.359c0.133,0.312,0.37,0.607,0.713,0.887c0.343,0.277,0.757,0.49,1.242,0.639c0.484,0.15,1.008,0.23,1.64,0.23c0.555,0,1.006-0.057,1.484-0.164c0.479-0.104,1.165-0.287,1.756-0.549l0.009-1.996c-0.692,0.428-1.549,0.59-2.247,0.59C11.693,14.381,11.344,14.293,11.039,14.123"
                                                />
                                        </svg>
                                    </a>
                                </li>
                                <li class="">
                                    <a 
                                        href="#"
                                        class="inline-block py-2 px-4 no-underline hover:bg-gray-300"
                                    >
                                        <svg viewBox="0 0 20 20" class="h-6 w-6" fill="currentColor" stroke="">
                                            <path 
                                                d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"   
                                                />
                                        </svg>
                                    </a>
                                </li>
                                <li class="">
                                    <a 
                                        href="#"
                                        class="inline-block py-2 px-4 no-underline hover:bg-gray-300"
                                    >
                                        <svg viewBox="0 0 20 20" class="h-6 w-6" fill="currentColor" stroke="">
                                            <path 
                                                d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"
                                                />
                                        </svg>
                                    </a>
                                </li>
                                <li class="">
                                    <a 
                                        href="#"
                                        class="inline-block py-2 px-4 no-underline hover:bg-gray-300"
                                    >
                                        <svg viewBox="0 0 20 20" class="h-6 w-6" fill="currentColor" stroke="">
                                            <path 
                                                d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"
                                                />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="mr-3 hidden lg:block">
                    <nuxt-link 
                        :to="{ name: 'photos' }"
                        class="rounded font-medium text-white text-base px-6 py-2 bg-green-500 hover:bg-green-600">
                        Join
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>
<script>

// import SearchInput from '~/components/General/SearchInput'

export default {
    name: "Header",

    // components: { SearchInput, },

    data() {
        return {
            scrollY: 0,
            isToggled: false,
        };
    },

    computed: {
        isScrollPassed() {
          return this.scrollY > 30;
        },
    },

    mounted() {
        window.addEventListener('scroll', this.scrollHandler);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
        this.isToggled = false; 
    },

    methods: {
        scrollHandler() {
            this.scrollY = Math.round(window.scrollY);
        },

        toggleNav() {
            var $menu = document.getElementById('nav-content');
            $menu.classList.toggle('hidden');
            if (this.isToggled) {
                this.isToggled = false
            } else {
                this.isToggled = true
            }
        },
  },
}
</script>
<style >
.explore-menu:before, 
.more-menu:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    background: #fff;
    right: 8px;
    top: -6px;
    transform: rotate(45deg);
    z-index: -1
}
</style>