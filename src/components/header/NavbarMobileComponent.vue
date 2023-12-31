<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { ref } from 'vue';
import { Bars3Icon, EnvelopeIcon } from '@heroicons/vue/24/outline';
import { useNavLinksStore } from '@/stores/navlinks';

const showNav = ref<boolean>(false);
const toggleNav = (): void => {
    showNav.value = !showNav.value;
}

const navlinksFr = useNavLinksStore().navlinks.fr;
const navlinksEn = useNavLinksStore().navlinks.en;
</script>

<template>
    <div class="nav-container">
        <nav class="navbar">
            <div class="navmenu-container">
                <button type="button" class="nav-button __toggle" @click="toggleNav">
                    <Bars3Icon class="nav-icon __toggle" />
                </button>
                <ol class="navmenu" v-if="showNav">
                    <li v-if="useLanguageStore().language === Language.FR" class="navitem"
                        v-for="(navlink, index) of navlinksFr" :key="index">
                        <RouterLink class="navlink" :to="navlink.path" :name="navlink.name" @click="toggleNav">{{
                            navlink.name }}</RouterLink>
                    </li>
                    <li v-if="useLanguageStore().language === Language.EN" class="navitem"
                        v-for="(navlink, index) of navlinksEn" :key="index">
                        <RouterLink class="navlink" :to="navlink.path" :name="navlink.name" @click="toggleNav">{{
                            navlink.name }}</RouterLink>
                    </li>
                </ol>
            </div>
            <RouterLink to="/contact" class="nav-button __contact">
                <EnvelopeIcon class="nav-icon __user" />
            </RouterLink>
        </nav>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.navbar {
    max-width: 240px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.navmenu-container {
    max-width: 120px;
    position: relative;
}

.nav-button {
    width: 60px;
    height: 60px;
    margin: $space-xs;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: transparent;
    color: color($dark, 50);
    border-radius: $radius-circle;
    border: 2px solid color($danger, 50);
    padding: $space-s;
    transition: all 300ms ease-in;

    .nav-icon {
        cursor: pointer;
        height: 1.5rem;
        width: auto;
        color: color($danger, 50);
    }

    &:hover {
        background-color: color($danger, 50);

        .nav-icon {
            color: color($danger, 80);
        }
    }

    &.__contact {
        color: color($alert, 45);
        border: 2px solid color($alert, 45);
        box-shadow: 2px 2px 3px color($primary, 45);

        .nav-icon {
            color: color($alert, 50);
        }

        &:hover,
        &.router-link-active {
            background-color: color($alert, 45);
            box-shadow: 2px 2px 3px color($primary, 30);

            .nav-icon {
                color: color($neutral, 65);
            }
        }
    }
}

.navmenu {
    box-sizing: border-box;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 160px;
    padding: 0;
    background-color: color($danger, 50);
    border: 2px solid transparent;
    border-radius: $radius-s;
    color: $light;
    position: absolute;
    top: 65px;
    right: $space-s;
    z-index: 1;

    .navitem {
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        margin: 0;
        transition: all 200ms ease-in;
        /* overflow: hidden; */

        .navlink {
            box-sizing: border-box;
            padding: $space-s $space-m;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: color($danger, 85);
            cursor: pointer;
        }

        &:hover,
        .router-link-active {
            background-color: color($danger, 85);
            color: color($danger, 50);
        }
    }
}
</style>