<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { path } = useRoute()
const query: QueryBuilderParams = { path, find: 'one' }

</script>

<template>
  <main>
    <article class="prose mx-auto">
      <ContentDoc
        v-slot="{ doc }"
        :query="query"
      >
        <!-- Default list slot -->
        <h2>教育经历</h2>
        <ul>
          <li
            v-for="edu in doc.education"
            :key="edu.id"
          >
            <span>{{ edu.start_date }} - {{ edu.end_date }}, </span>
            <span>{{ edu.school }}, </span>
            <span>{{ edu.department }}, </span>
            <span>{{ edu.degree }}, </span>
            <span>{{ edu.score_type }}: </span>
            <span>{{ edu.score }}</span>
            <span v-if="edu.ranking">, 排名: {{ edu.ranking }}</span>
            <span v-if="edu.advisor">, advised by {{ edu.advisor }}</span>
          </li>
        </ul>
        <h2>工作经历</h2>
        <ul>
          <li
            v-for="job in doc.jobs"
            :key="job.id"
          >
            <span>{{ job.start_date }} - {{ job.end_date }}, </span>
            <span>{{ job.name }}, </span>
            <span>{{ job.role }} </span>
            <p>{{ job.description }}</p>
            <ul>
              <li
                v-for="achievement in job.achievements"
                :key="achievement.id"
              >
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </li>
        </ul>
        <h2>项目</h2>
        <h4>开源类</h4>
        <table>
          <tr
            v-for="software in doc.opensource"
            :key="software.id"
          >
            <td
              align-top
              w-40
              align="right"
            >
              {{ software.name }}
            </td>
            <td align-top>
              {{ software.description }}
            </td>
          </tr>
        </table>
        <h4>商业类</h4>
        <table>
          <tr
            v-for="software in doc.commercial"
            :key="software.id"
          >
            <td
              align-top
              w-40
              align="right"
            >
              {{ software.name }}
            </td>
            <td align-top>
              {{ software.description }}
            </td>
          </tr>
        </table>
        <h2>技能树</h2>
        <h4>语言类</h4>
        <table>
          <tr
            v-for="skill in doc.language"
            :key="skill.id"
          >
            <td
              align-top
              w-40
              align="right"
            >
              {{ skill.name }}
            </td>
            <td align-top>
              {{ skill.description }}
            </td>
          </tr>
        </table>
        <h4>软件类</h4>
        <table>
          <tr
            v-for="skill in doc.software"
            :key="skill.id"
          >
            <td
              align-top
              w-40
              align="right"
            >
              {{ skill.name }}
            </td>
            <td align-top>
              {{ skill.description }}
            </td>
          </tr>
        </table>
      </ContentDoc>
    </article>
  </main>
</template>
