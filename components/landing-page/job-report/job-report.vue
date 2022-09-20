<template>
  <div class="container">
    <div class="gc_counter_cont_wrapper">
      <div class="count-description">
        <span class="timer">2540</span><i class="fa fa-plus"></i>
        <h5 class="con1">{{ $t("jobAvailable") }}</h5>
      </div>
    </div>
    <div class="gc_counter_cont_wrapper2">
      <div class="count-description">
        <span class="timer">7325</span><i class="fa fa-plus"></i>
        <h5 class="con2">{{ $t("resume") }}</h5>
      </div>
    </div>
    <div class="gc_counter_cont_wrapper3">
      <div class="count-description">
        <span class="timer">1924</span><i class="fa fa-plus"></i>
        <h5 class="con3">{{ $t("members") }}</h5>
      </div>
    </div>
    <div class="gc_counter_cont_wrapper4">
      <div class="count-description">
        <span class="timer">4275</span><i class="fa fa-plus"></i>
        <h5 class="con4">{{ $t("company") }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .gc_counter_cont_wrapper,
  .gc_counter_cont_wrapper2,
  .gc_counter_cont_wrapper3,
  .gc_counter_cont_wrapper4 {
    width: 100%;
  }
}
</style>