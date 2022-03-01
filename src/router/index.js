import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/contact.vue'
import resume from '../views/resume.vue'
import projects from '../views/projects'
import testimonial from '../views/testimonial'


const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: testimonial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
