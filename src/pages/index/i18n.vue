<template>
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <span class="flex items-center cursor-pointer i18n-locale">
      <img class="w-5 h-4" :src="i18n_locale_img" :alt="$i18n.locale" />
      <span class="ml-2 sm:block">{{ getCurrentLocaleData.lang }}</span>
    </span>
    <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
      <vs-dropdown-item @click="updateLocale('vi')"><img class="w-5 h-4 mr-1" src="@/assets/images/flags/vi.png" alt="vi" /> &nbsp;Tiếng Việt</vs-dropdown-item>
      <vs-dropdown-item @click="updateLocale('en')"><img class="w-5 h-4 mr-1" src="@/assets/images/flags/en.png" alt="en" /> &nbsp;English</vs-dropdown-item>
      <vs-dropdown-item @click="updateLocale('cam')"><img class="w-5 h-4 mr-1" src="@/assets/images/flags/cam.png" alt="cam" /> &nbsp;ប្រទេសកម្ពុជា</vs-dropdown-item>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
export default {
  computed: {
    i18n_locale_img() {
      return require(`@/assets/images/flags/${this.$i18n.locale}.png`)
    },
    getCurrentLocaleData() {
        const locale = this.$i18n.locale;
        if (locale == "vi") return { flag: "vi", lang: 'Tiếng Việt' }
        else if (locale == "en") return { flag: "us", lang: 'English' }
        else if (locale == "cam") return { flag: "cam", lang: 'ប្រទេសកម្ពុជា' }
    },
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locate", this.$i18n.locale);
    },
  }
}
</script>

<style>
.con-vs-dropdown--menu{
    z-index: 99999;
}
</style>
