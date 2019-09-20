<style>
  .loader {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    margin: -75px 0 0 -75px;
    border: 11px solid #f3f3f3;
    border-radius: 50%;
    border-top: 11px solid #77dd62;

    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loader" />
