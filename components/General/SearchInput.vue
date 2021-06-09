<template>
  <div class="relative">
    <div class="relative text-gray-600 group">
        <input 
            type="search"
            name="serch"
            placeholder="Search"
            class="w-full bg-white h-10 px-5 p-7 text-base focus:outline-none group-hover:rounded-b-none rounded-lg "
            :class="{isSuggestVisible:'active-search-input'}"
        />
            <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
                <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                </svg>
            </button>
        <div class="origin-top absolute top-14 w-full hidden group-hover:block">
            <div class="p-6 bg-white text-black w-full">
                <p>Trending Topics</p>
                <ul class="flex flex-wrap" v-if="suggestions">
                    <li
                        class="p-2 m-1 shadow-lg rounded-xl"
                        v-for="(suggestion, i) in suggestions"
                        :key="i"
                    >
                        <img
                            class="inline object-cover w-8 h-8 rounded-full"
                            :src="suggestion.image"
                            :alt="suggestion.title"
                            />
                        {{ suggestion.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "search-input",

    data() {
        return {
            isSuggestVisible: true,
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
        }
    }
}
</script>

<style>
.search-input {
    border-radius: 8px;
}
.active-search-input {
    border-radius: 28px;
}
</style>
