<template>
<div>
    <div 
        class="flex-1 bg-white text-gray-800 relative md:flex items-center justify-center text-center md:text-left">
        <div class="w-full md:w-1/2 m-10 shadow-xl rounded-3xl p-10 lg:p-20 h-full w-full">
            <div class="mb-10 md:mb-20 text-gray-600 font-light">
                <h1 class="font-black uppercase text-2xl lg:text-3xl text-yellow-500 mb-10">
                    This page is under construction
                </h1>
                <p>We are currently working on this page</p>
                <p>Try searching again or use the Go Back button below.</p>
            </div>
            <div class="mb-20 md:mb-0">
                <nuxt-link 
                    to="/"
                    class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"
                >
                    Go Back
                </nuxt-link>
            </div>
        </div>
    </div>
    <div 
        class="w-64 md:w-96 h-96 bg-blue-200 bg-opacity-30 absolute -top-32 left-0 overflow-hidden rounded-full pointer-events-none -rotate-45 transform">
    </div>
</div>
</template>

<script>
export default {
    layout: 'blank',
    name: "photos",
}
</script>
