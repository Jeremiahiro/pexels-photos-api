<template>
  <div class="">
    <div
      class="topview relative lg:p-32 px-5 py-10 flex justify-center align-center text-white"
      :style="{ backgroundImage: `url(${customImage.src.original})` }"
      >
      <div class="lg:my-8 my-14 mx-auto lg:w-2/3">
        <div class="block">
          <h1
            class="text-left lg:font-extrabold font-semibold text-4xl tracking-wide leading-tight"
            >
            The best free stock photos &amp; videos shared by talented creators.
          </h1>
        </div>
        <div class="lg:my-3 my-2">
          <GeneralSearchInput />
        </div>
        <div class="inline-flex font-thin">
          <span class="mr-2 hidden lg:block">Suggested:</span>
            <ul class="inline-flex">
              <li 
                v-for="(suggestion, i) in formatTrending(suggestions)"
                :key="i"
                class="mr-1"
              >
                <nuxt-link
                  to="/search"
                  v-if="!suggestion.indicator"
                >
                  {{ suggestion.title }},
                </nuxt-link>
                  <nuxt-link
                  to="/search"
                  v-else
                >
                  {{ suggestion.more }}
                </nuxt-link>
                
              </li>
            </ul>
        </div>
      </div>
      <div class="absolute bottom-2 right-2 origin-bottom text-sm">
         <a class="no-underline text-gray-200" :href="customImage.photographer_url" target="_blank">
            Photo by {{ customImage.photographer }}
          </a>
      </div>
    </div>

    <GeneralSubNavMenu />
    <div class="">
      <div class="px-6 py-2 flex justify-between align-center">
        <div class="font-semibold lg:text-xl text-base">Free Stock Photos</div>
        <div class="inline-block text-black no-underline group relative">
            <button
                class="inline-flex justify-center font-medium"
                >
                <span class="mr-1">Trending</span>
                <svg
                  class="-mr-1 mt-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                </svg>
            </button>
            <ul 
              class="trending-menu origin-top-right absolute right-0 top-10 w-40 hidden text-black bg-white pt-1 group-hover:block">
                <li class="">
                    <nuxt-link 
                        :to="{ name: '/' }"
                        class="w-full font-medium text-base inline-block py-2 px-4 no-underline hover:bg-gray-300"
                    >
                        Trending
                    </nuxt-link>
                </li>
                <li class="">
                    <nuxt-link 
                        :to="{ name: '/' }"
                        class="w-full font-medium text-base inline-block py-2 px-4 no-underline hover:bg-gray-300"
                    >
                        New
                    </nuxt-link>
                </li>
            </ul>
        </div>
      </div>

      <div
        v-if="$fetchState.pending"
        class="flex justify-betweeen flex-wrap px-6 text-white"
      >
        <GeneralImagePlaceholder />
        <GeneralImagePlaceholder />
        <GeneralImagePlaceholder />
      </div>
      <div v-else-if="$fetchState.error" class="row">
        <div class="text-center">
          <p>An error occurred :(</p>
        </div>
      </div>

      <div v-else>
        <div
          class="lg:grid lg:grid-cols-3 lg:gap-5 px-6 text-white"
        >
          <GeneralImageCard 
            v-for="(photo, i) in photos"
            :key="i"
            :photo="photo" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      limit: 20,
      photos: [],
      total: '',
      next: '',
      page: '',
      suggestions: [
        {
          id: 1,
          title: 'Business Man',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 2,
          title: 'Fatherhood',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 3,
          title: 'Tech',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 4,
          title: 'Dev',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 5,
          title: 'Laptop',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 6,
          title: 'Abstract',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 7,
          title: 'Agriculture',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 8,
          title: 'Plumbing',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 9,
          title: 'Fishing',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 10,
          title: 'Farmers',
          image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
      ],
      images: [
        {
          id: 1,
          width: 3024,
          height: 3024,
          url: "https://images.pexels.com/photos/7038231/pexels-photo-7038231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
          }
        }
      ]
    }
  },

  computed: {
    customImage() {
      let customImage = this.images[0];
      const photos = this.photos
      if (photos) {
        customImage = photos[Math.floor(Math.random() * photos.length)];
      }
      return customImage;
    },
  },

  async fetch() {
    const response = await this.$axios.get(`curated?per_page=${this.limit}`);

    const { photos, total_result, next_url, page } = await response.data;
    this.photos = photos;
    this.total = total_result;
    this.next = next_url;
    this.page = page;
  },

  methods: {

    formatTrending(suggestions) {
        if (suggestions.length > 5) {
          // Cut out 3 and add more indicator
          const slicedOut = suggestions.slice(0, 4);
          return [
            ...slicedOut,
            {
              id: 'more',
              indicator: true,
              more: 'more',
            },
          ];
        }
        return suggestions;
      },
    },

    customBG(image) {
        return 'background-image: ' + image.src.original;
    }

}
</script>

<style>
.topview {
  /* background-image: url('~/assets/images/av.jpg'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.nav.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
.nav.nuxt-link-exact-active {
  color: #00c58e;
  border-bottom: 2px solid #00c58e;
}
.trending-menu:before, 
.image-menu:after {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    background: #fff;
    z-index: -1
}
.trending-menu:before {
    right: 8px;
    top: -6px;
    transform: rotate(45deg);
}
.image-menu:after {
    left: 6px;
    bottom: -6px;
    transform: rotate(45deg);
}
.photo-info {
  background-color: rgb(0, 0, 0, 0.5);  
}
.photographer-menu-content {
    display: none;
}
.photographer-menu:hover + .photographer-menu-content {
    display: block;
}
</style>
