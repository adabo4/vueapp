<template>
  <footer>
    <div class="footer-div">
      <Headline>Máte otázky? Jednoducho sa spýtajte.</Headline>
    </div>
    <div class="footer-contact">
      <Contact>+421 (02) 555 65 726</Contact>
      <Contact><span>uxdesign@riesenia.com</span></Contact>
    </div>
    <div class="footer-logo">
      <h6>riesenia</h6>
    </div>
  </footer>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
footer {
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 750px;
  background-image: linear-gradient(170deg, #3d3080 55%, #6d2a79, #912675 100%);
}

.footer-div {
  width: 650px;
  margin: 0 auto;
  margin-top: 5rem;
}
.footer-contact {
  display: flex;
  gap: 1rem;
  margin: 1rem auto;
  width: fit-content;

  span {
    color: #eb345c;
  }
}

h6 {
  font-family: $base-font;
  font-size: 4em;
  text-transform: uppercase;
  font-weight: 800;
  color: white;
  width: auto;
  margin: 0 auto;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .footer-div {
    width: 100%;
  }

  .footer-contact {
    flex-direction: column;
  }
}
</style>
