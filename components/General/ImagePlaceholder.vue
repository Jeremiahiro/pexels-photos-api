<template>
  <div>
<div class="w-full my-4 lg:my-0 overflow-hidden">
    <div class="bg-white shadow-md p-4">
        <div data-placeholder class="mr-2 h-50 w-full overflow-hidden relative bg-gray-200">
        
        </div>
    </div>
</div>



  </div>
</template>

<script>
export default {
    name: "placeholder",
}
</script>

<style>
    [data-placeholder]::after {
        content: " ";
        box-shadow: 0 0 50px 9px rgba(254,254,254);
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%; 
        animation: load 1s infinite;
    }
    @keyframes load {
        0%{ left: -100%}
        100%{ left: 150%}
    }
</style>