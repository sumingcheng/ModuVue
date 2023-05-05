import login from '@views/login/service-config/routes'
import home from '@views/home/service-config/routes'
import error from '@views/error/service-config/routes'
import detail from '@views/detail/service-config/routes'
import { dynamicRouting } from '@serv/utils/modules'

const routes = [...dynamicRouting()]

export default routes
