import { context } from '../../config/index';

const config = {
  baseURL: 'https://' + context.host,
  paymentIntentConfirm: '/app_dev.php/public/v1.3/stripe/paymentIntent/confirm',
  requestPaymentIntentUrl:
    '/app_dev.php/public/v1.3/stripe/paymentIntent/request',
  attachPaymentUrl:
    '/app_dev.php/api/v1.3/en/stripe/customer/paymentMethod/attach',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjU3NzM1MDIsImV4cCI6MTU2NTc3NzEwMiwicm9sZXMiOlsiUk9MRV9UUkVFRE9OT1IiLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJ0ZXN0UHJvZEBvbmV6ZXJvZWlnaHQuY28ifQ.qQARDy6FJoW1b9qmhsjJjMmYzUwcfa48-vpfRQxCc2dyTj8yKCdHuJlMlVanwLkMRxfi2i9orS4Jk10oyVpn01kfwnlNtNmKt815x5u9LWYUOMrYW7Vm_zB6J0HGpQYSm3ikbA_5N4D9in8gXZYIYoCFjeZnSRhgmbnBOtDrkcOHKUb52pshsxIJfzSUz3j0d8mhcaQb31gQahIKn7rPJUWyfJm6rVqdQCA2g5zYRUJLZgtNcukIBle-HkgW7jhlFDrHw_b-K8rFcr_Oy6yTXfV6Fh9ZhVMq4NpqYpeufEbab3cu9abo7vXrFPJ-iTXbzDXQgTnmCGKGs2IL6GNINcOMXZgXk1WMXra4_PcSnXvHjku9iM4jplqo1W_u_DGmWWMVs1lhJL16nzhJH5yC9eBF67mkYYtwTglyYLiTpV7V9yuf86bGBgqEj3pZuD49hr2lc0Qq2n7domCGLU6-d8_hJtjN8fuFUgMJnFr9QPuAsTbM0ip7Ehw4qLeic1Be01LG8d9nHqW1wk5czMabtPOwM78dl32wALP-siwgt4hV1niPu0zbC6EKCOm5RNnt2J7UxxF0cxezNRgwexUtkEAuVbD16Uor6iqcPhosrAnwZdebMMBkViPJrqEoOHwINgAHJ123oqfBCXLviFT5Z-Aq093grQG6-iAWS6efXJI'
};

export default config;
