<template>
  <div class="dropdown">
    <button class="button" v-if="show" key="on" @click="hideDropdown">
      <mdicon name="menu-open" />
    </button>
    <button class="button" v-if="!show" key="off" @click="showDropdown">
      <mdicon name="menu" />
    </button>
    <transition name="dropdown">
      <ul
        class="menu"
        v-bind:class="{ active: show }"
        v-if="show"
        v-click-outside="hideDropdown"
        @click="hideDropdown"
      >
        <li class="menu-item" v-for="(item, index) in items" :key="index">
          <hr v-if="item.divisor" />
          <router-link
            v-if="item.to && (!item.link || !item.onClick)"
            :to="item.to"
            class="menu-link"
          >
            <mdicon v-if="item.icon" :name="item.icon" />
            <div class="menu-text">{{ item.title }}</div>
          </router-link>
          <a v-if="item.link && (!item.to || !item.onClick)" :href="item.link" class="menu-link">
            <mdicon v-if="item.icon" :name="item.icon" />
            <div class="menu-text">{{ item.title }}</div>
          </a>
          <button
            v-if="item.onClick && (!item.to || !item.link)"
            @click="item.onClick"
            class="menu-link"
          >
            <mdicon v-if="item.icon" :name="item.icon" />
            <div class="menu-text">{{ item.title }}</div>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    items: {
      type: Array,
      default: [
        {
          title: 'Item 1',
          link: null,
          to: null,
          onClick: null,
          icon: 'account',
          divisor: false,
        },
        {
          title: 'Item 2',
          link: null,
          to: null,
          onClick: null,
          icon: null,
          divisor: false,
        },
      ],
    },
  },
  data() {
    return {
      show: false,
      counter: 0,
    };
  },
  methods: {
    hideDropdown() {
      if (this.counter) {
        this.counter = 0;
        this.show = false;
        return;
      }
      this.counter++;
    },
    showDropdown() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
}

.button {
  color: var(--color-primary);
  cursor: pointer;
  border: 1px solid transparent;
}
.button:focus {
  outline: 0;
}

.menu {
  right: 0;
  position: absolute;
  z-index: 10;
  max-height: 25rem;
  overflow-y: auto;
  padding: 0.5rem;
  border-radius: calc(4px * var(--ratio));
  background-color: var(--color-light);
  border: 1px solid var(--color-gray);
  transition: all 0.35s;
}
.menu-link {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.6rem 0.8rem;
  border-radius: calc(3px * var(--ratio));
  border: none;
  color: var(--text-color);
  width: 100%;
  line-height: 1;
}
.menu-link:hover {
  color: var(--text-color-light);
  background-color: var(--color-primary);
}
.menu-text {
  white-space: nowrap;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(1.5rem);
}

hr {
  border: 1px solid var(--color-gray);
}
</style>
