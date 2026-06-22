import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
    let observer = null

    const initScrollAnimation = () => {
        const elements = document.querySelectorAll('.scroll-animate')

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        elements.forEach((el) => observer.observe(el))
    }

    const destroyObserver = () => {
        if (observer) {
            observer.disconnect()
            observer = null
        }
    }

    onMounted(() => {
        setTimeout(initScrollAnimation, 100)
    })

    onUnmounted(() => {
        destroyObserver()
    })

    return {
        initScrollAnimation,
        destroyObserver
    }
}