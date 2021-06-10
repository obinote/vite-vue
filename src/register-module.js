import router from './router'
import store from './store'

//modules
import aboutModule from './modules/about'

const modules = {
  aboutModule,
}

const registerModule = (name, module) => {
  if (module.store) {
    store.registerModule(name, module.store)
  }

  if (module.router) {
    module.router(router)
  }
}

export const registerModules = () => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey]
    registerModule(moduleKey, module)
  })
}
