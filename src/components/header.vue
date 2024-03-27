<template>
    <div class="bg-success">
        <div>
        <button class="buttona" data-text="Awesome">
          <span class="actual-text">&nbsp;@APPLE  &nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;@APPLE&nbsp;</span>
      </button>
    </div>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
}
</script>
<style>
.bg-success{
    height: 100px;
}
.buttona {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }
  
  /* button styling */
  .buttona {
    top: 20px;
    --border-right: 6px;
    --text-stroke-color: rgba(0, 0, 0, 0.6);
    --animation-color: #e1ff00;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .buttona:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color))
  }
  .bg-secondary{
    height: 100px;
    
  }
</style>