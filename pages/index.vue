<template>
  <div>
    <NuxtRouteAnnouncer />
    <v-app :dark="isDark" :class="isDark ? 'dark-background' : 'light-background'">
      <v-app-bar app :class="isDark ? 'dark-app-bar' : 'light-app-bar'">
        <v-btn icon @click="toggleTheme">
          <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <NuxtPage />
        <v-container>
          <v-row>
            <v-col
              v-for="profile in profiles"
              :key="profile.id"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card :class="isDark ? 'dark-card' : 'light-card'">
                <v-img
                  :src="getProfileImage(profile)"
                  height="200px"
                ></v-img>
                <v-card-title>
                  {{ profile.firstName }} {{ profile.lastName }}
                </v-card-title>
                <v-card-subtitle>
                  {{ formatJobTitle(profile) }}
                </v-card-subtitle>
                <v-card-text>
                  <p>
                    <v-icon left>mdi-calendar</v-icon>
                    <strong>Date Hired:</strong> {{ formatDate(profile.dateHired) }}
                  </p>
                  <p>
                    <v-icon left>mdi-phone</v-icon>
                    <strong>Phone:</strong> {{ formatPhoneNumber(profile.phone) }}
                  </p>
                  <p>
                    <v-icon left>mdi-email</v-icon>
                    <strong>Email:</strong> {{ profile.email }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { usePayload } from '@/composables/usePayload';

export default {
  name: 'ProfileList',
  data() {
    return {
      profiles: [],
      isDark: false, 
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
    formatJobTitle(profile) {
      return profile.department ? `${profile.jobTitle} - ${profile.department}` : profile.jobTitle;
    },
    formatPhoneNumber(phone) {
      const phone1 = phone.substring(0, 3);
      const phone2 = phone.substring(3, 6);
      const phone3 = phone.substring(6);
      return `(${phone1}) ${phone2}-${phone3}`;
    },
    formatDate(dateHired) {
      const year = dateHired.substring(0, 4);
      const month = dateHired.substring(5, 7);
      const day = dateHired.substring(8, 10);
      const currentYear = new Date().getFullYear();
      const seniority = currentYear - year;
      if (seniority == 0) {
        const curMonth = new Date().getMonth();
        if(((curMonth-month) == 0) || ((curMonth-month) == 1)){
          return `${month}/${day}/${year} (New employee)`;
        }
        else{
          return `${month}/${day}/${year}`
        }
      } 
      else if (seniority == 1) {
        return '(1 year)';
      } 
      else {
        return `${month}/${day}/${year} (${seniority} years)`;
      }
    },
    getProfileImage(profile) {
      if (profile.thumbnailURI) {
        return profile.thumbnailURI;
      } 
      else {
        const initials =
          profile.firstName.substring(0, 1) + profile.lastName.substring(0, 1);
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <rect width="200" height="200" fill="#bdbdbd"/>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="70">
            ${initials}
          </text>
        </svg>
        `;
        return `data:image/svg+xml;base64,${btoa(svg)}`;
      }
    },
  },
  created() {
    this.profiles = usePayload();
  },
};
</script>

<style scoped>
/* Light Mode */
.light-background {
  background-color: #f5f5f5;
  color: #000000;
}

.light-app-bar {
  background-color: #ffffff !important;
  color: #000000 !important;
}

/* Dark Mode */
.dark-background {
  background-color: #121212;
  color: #ffffff;
}

.dark-app-bar {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
}

.dark-card {
  background-color: #1e1e1e;
  color: #ffffff;
}

.light-card {
  background-color: #ffffff;
  color: #000000;
}

/* Scoped Specificity Adjustment */
:deep(.v-app-bar) {
  transition: background-color 0.3s, color 0.3s;
}
</style>
