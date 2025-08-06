<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- خلفية متحركة -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- المحتوى الرئيسي -->
    <div class="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      
      <!-- الشعار والصورة -->
      <div class="text-center mb-8 animate-fade-in">
        <div class="mb-6 relative">
          <img 
            :src="cosmicImage" 
            alt="فيزياء المعنى" 
            class="w-48 h-48 mx-auto rounded-full shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
          <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          شفرة المنطق الإلهي
        </h1>
        
        <div class="flex items-center justify-center gap-2 mb-6">
          <AtomIcon class="w-6 h-6 text-purple-400 animate-spin" />
          <p class="text-xl md:text-2xl text-purple-200 font-light">
            شفرة الطيف المعنوي للمنطق الإلهي
          </p>
          <BookOpenIcon class="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
      </div>

      <!-- النص التشويقي -->
      <PhysicsCard variant="glass" class-name="max-w-2xl mx-auto mb-8 animate-slide-up">
        <div class="p-8 text-center">
          <div class="flex items-center justify-center mb-4">
            <SparklesIcon class="w-8 h-8 text-yellow-400 mr-2 animate-pulse" />
            <h1 class="text-3xl md:text-4xl font-bold text-white">شفرة المنطق الإلهي</h1>
          </div>
          <p class="text-lg md:text-xl text-gray-300 mb-6 font-semibold">
            شفرة الطيف المعنوي للمنطق الإلهي
          </p>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            إن في الكائنات أسرارًا وفي القرآن أنوارًا
          </p>
          <p class="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            كل كلمة من كلمات الخلق... مفتاح لباب من أبواب المعرفة الإلهية.
          </p>
          <p class="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            واللسان العربي ليس مجرد أداة للتواصل، بل هو مصفوفة لشفرة المنطق الإلهي الكوني وقانون الوعي المنزل، وحروف تلك المصفوفة تحمل في طياتها أسرار الخلق وأنوار الوجود الكائن.
          </p>    
          <p class="text-purple-200 leading-relaxed">
            انضموا إلينا في رحلة كشف <span class="text-yellow-400 font-semibold">"شفرة الطيف المعنوي للمنطق الكوني الإلهي"</span>، والوقوف على أسرار الحروف التي أودعها الله في كائن الكون والكتاب المبين.
          </p>
        </div>
      </PhysicsCard>

      <!-- نموذج التسجيل -->
      <PhysicsCard variant="glass" class-name="max-w-md mx-auto animate-slide-up animation-delay-500">
        <div class="p-6">
          <div class="text-center mb-4">
            <MailIcon class="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h3 class="text-xl font-bold text-white mb-2">الرحلة بدأت للتو...</h3>
            <p class="text-purple-200 text-sm">سجل اهتمامك لتكون أول من يعرف عند الإطلاق!</p>
          </div>
          
          <div v-if="!isSubmitted">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <PhysicsInput
                type="email"
                placeholder="بريدك الإلكتروني"
                v-model="email"
                :required="true"
              />
              <PhysicsButton 
                type="submit" 
                class-name="w-full"
              >
                ترقبوا!
              </PhysicsButton>
            </form>
          </div>
          
          <div v-else class="text-center py-4">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckIcon class="w-8 h-8 text-white" />
            </div>
            <p class="text-green-400 font-semibold">شكراً لك! سنتواصل معك قريباً.</p>
          </div>
        </div>
      </PhysicsCard>

      <!-- الهاشتاجات -->
      <div class="mt-8 text-center animate-fade-in animation-delay-1000">
        <div class="flex flex-wrap justify-center gap-2 text-sm text-blue-300">
          <span class="bg-blue-900/30 px-3 py-1 rounded-full">#شفرة_المنطق_الإلهي</span>
          <span class="bg-blue-900/30 px-3 py-1 rounded-full">#أسرار_الحروف</span>
          <span class="bg-blue-900/30 px-3 py-1 rounded-full">#اللغة_العربية</span>
          <span class="bg-blue-900/30 px-3 py-1 rounded-full">#الكيان_المعرفي_الإلهي</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PhysicsCard from './components/PhysicsCard.vue'
import PhysicsButton from './components/PhysicsButton.vue'
import PhysicsInput from './components/PhysicsInput.vue'
import cosmicImage from './assets/dal_cosmic_qr.png'

// Icons (we'll create simple SVG components)
import AtomIcon from './components/icons/AtomIcon.vue'
import BookOpenIcon from './components/icons/BookOpenIcon.vue'
import SparklesIcon from './components/icons/SparklesIcon.vue'
import MailIcon from './components/icons/MailIcon.vue'
import CheckIcon from './components/icons/CheckIcon.vue'

const email = ref('')
const isSubmitted = ref(false)

const handleSubmit = () => {
  if (email.value) {
    console.log('Email submitted:', email.value)
    isSubmitted.value = true
    setTimeout(() => {
      isSubmitted.value = false
      email.value = ''
    }, 3000)
  }
}
</script>

