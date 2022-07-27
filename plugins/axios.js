export default function ({ $axios, redirect }) {
    $axios.onError(error => {
      console.error(error)
    })
  }