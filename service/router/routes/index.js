import login from '@views/login/service-config/routes'
import home from '@views/home/service-config/routes'
import error from '@views/error/service-config/routes'
import detail from '@views/detail/service-config/routes'

const routes = [...login, ...home, ...error, ...detail]

export default routes
