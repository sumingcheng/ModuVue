import login from '@views/login/service-config/routes'
import home from '@views/home/service-config/routes'
import error from '@views/error/service-config/routes'

const routes = [...login, ...home, ...error]

export default routes
