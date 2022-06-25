<template>
  <div>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <div class="container">
        <span to="/" class="navbar-brand">
          <svg width="50" height="50" viewBox="0 0 2500 2500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H2500V2500H0V0Z" fill="000"/>
            <path
                d="M2150.4 731.78L1432.96 1144.7L1250 1039.4L349.6 1557.64V731.78L1249.99 213.56L2150.4 731.78ZM349.613 1768.22L1067.06 1355.29L1250 1460.59L2150.39 942.357V1768.21L1249.99 2286.41L349.613 1768.22ZM1891.94 1306.52V1619.44L1250 1988.91L795.202 1727.16L1067.05 1570.72L1250 1675.99L1891.94 1306.52ZM608.074 1193.46V880.543L1250 511.1L1704.78 772.855L1432.95 929.31L1250 824.008L608.074 1193.46Z"
                stroke="white" stroke-width="43.5265" stroke-miterlimit="2.613" stroke-linecap="round"
                stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss">
.navbar-expand-md .navbar-nav .nav-link {
  padding-left: 3.5rem;
}
</style>