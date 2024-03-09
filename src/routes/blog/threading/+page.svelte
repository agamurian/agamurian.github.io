

<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#000040');

	let data = {
  "threadingExplanation": {
    "en": {
      "ThreadPool": "tp = ThreadPool(num)",
      "AsynchronousExecution": "for sample in all_samples:\n    tp.apply_async(work, (sample,))",
      "ThreadFunction": "def work(sample):\n    my_tool_subprocess = subprocess.Popen('mytool {}'.format(sample), shell=True, stdout=subprocess.PIPE)\n    line = True\n    while line:\n        myline = my_tool_subprocess.stdout.readline()\n        all_samples.append(myline)",
      "ClosingAndJoining": "tp.close()\ntp.join()"
    },
    "ru": {
      "ThreadPool": "tp = ThreadPool(num)",
      "AsynchronousExecution": "for sample in all_samples:\n    tp.apply_async(work, (sample,))",
      "ThreadFunction": "def work(sample):\n    my_tool_subprocess = subprocess.Popen('mytool {}'.format(sample), shell=True, stdout=subprocess.PIPE)\n    line = True\n    while line:\n        myline = my_tool_subprocess.stdout.readline()\n        all_samples.append(myline)",
      "ClosingAndJoining": "tp.close()\ntp.join()"
    }
  },
  "importanceOfThreading": {
    "en": {
      "Advanages":"Threading Advanages",
      "Call":"subprocess.Call",
      "ParallelExecution": "Threading allows multiple tasks to be executed concurrently.",
      "ImprovedResponsiveness": "Threading can enhance responsiveness, especially in tasks involving waiting for external resources.",
      "ResourceUtilization": "Threading is beneficial for tasks that can run independently, making efficient use of system resources."
    },
    "ru": {
      "Advanages":"Преимущества потоков",
      "Call":"subprocess.Call",
      "ParallelExecution": "Потоки позволяют выполнять несколько задач параллельно.",
      "ImprovedResponsiveness": "Потоки могут улучшить отзывчивость, особенно в задачах, связанных с ожиданием внешних ресурсов.",
      "ResourceUtilization": "Потоки полезны для задач, которые могут выполняться независимо, что позволяет эффективно использовать ресурсы системы."
    }
  }
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />
</svelte:head>

<Layout>
<img class="w-100 my-10 rounded" src="/blog/threading.webp" />

  <code style="width: 100%; padding: 1.5rem">
    <p class="comment"># Import necessary modules</p>
    <span class="keyword">from</span> multiprocessing.pool <span class="keyword">import</span> ThreadPool
    <span class="keyword">import</span> subprocess

    <p class="comment"># Define work function</p>
    <span class="keyword">def</span> <span class="function">work</span>(<span class="variable">sample</span>):
        <span class="variable">my_tool_subprocess</span> = subprocess.Popen('mytool'.format(<span class="variable">sample</span>), shell=True, stdout=subprocess.PIPE)
        <span class="variable">line</span> = <span class="variable">True</span>
        <br/>
        <div class="tab">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</div>
          <span class="keyword">while</span> <span class="variable">line</span>:
            <span class="variable">myline</span> = <span class="variable">my_tool_subprocess</span>.stdout.readline()
            <p class="comment"># here I parse stdout..</p>

    <p class="comment"># Set the number of workers (defaults to CPU count)</p>
    <span class="variable">num</span> = <span class="number">None</span>
    <span class="variable">tp</span> = ThreadPool(<span class="variable">num</span>)

    <p class="comment"># Apply work function asynchronously to each sample</p>
    <span class="keyword">for</span> <span class="variable">sample</span> <span class="keyword">in</span> <span class="variable">all_samples</span>:
        <span class="variable">tp</span>.apply_async(<span class="function">work</span>, (<span class="variable">sample</span>,))

    <p class="comment"># Close and join ThreadPool</p>
        <div class="tab">&nbsp&nbsp</div>
    <span class="variable">tp</span>.close()
    <span class="variable">tp</span>.join()
  </code>


<hr/>
<h4>{data.importanceOfThreading[$lang].Advanages}:</h4>

<ul>
  <li> - {data.importanceOfThreading[$lang].ParallelExecution}</li>
  <li> - {data.importanceOfThreading[$lang].ImprovedResponsiveness}</li>
  <li> - {data.importanceOfThreading[$lang].ResourceUtilization}</li>
</ul>

{#if $lang == 'en'}
  
    <hr/>
<h4>{data.importanceOfThreading[$lang].Call}:</h4>
  <ol>
    <li>
      <strong><code>subprocess.call</code></strong>:
      <ul>
        <li><code>subprocess.call</code> is used to run a command in a subprocess and wait for it to complete.</li>
        <li>It is a blocking call, meaning the program waits until the subprocess finishes its execution before proceeding.</li>
        <li>It returns the return code of the subprocess.</li>
      </ul>
    </li>

    <li>
      <strong><code>subprocess.Popen</code></strong>:
      <ul>
        <li><code>subprocess.Popen</code> is used for more advanced process handling, allowing greater control over the input, output, and error streams of the subprocess.</li>
        <li>It runs the command in a subprocess, but the Python program doesn't wait for the subprocess to finish.</li>
        <li>You can communicate with the subprocess using its input and output streams.</li>
      </ul>
    </li>
  </ol>

  <p>
    If you're considering threading in Python, the <code>subprocess</code> module itself is not directly related to threading. If you want to run multiple subprocesses concurrently, you might want to explore the <code>concurrent.futures</code> module, which provides a high-level interface for asynchronously executing functions in separate threads or processes.
  </p>

  <p class="note">
    If you have a specific use case related to threading and subprocesses, providing more details would help in giving a more targeted recommendation.

  </p>
  {:else}
    <hr/>
<h4>{data.importanceOfThreading[$lang].Call}:</h4>

  <p>
    Похоже, возможно, у вас есть небольшое недопонимание в вашем заявлении. <code>subprocess.call</code> и <code>subprocess.Popen</code> служат разным целям, и ни одна из них не специально предназначена для многозадачности (threading). Вот краткое пояснение по каждой из них:
  </p>

  <ol>
    <li>
      <strong><code>subprocess.call</code></strong>:
      <ul>
        <li><code>subprocess.call</code> используется для выполнения команды в дочернем процессе и ожидания ее завершения.</li>
        <li>Это блокирующий вызов, что означает, что программа ожидает завершения дочернего процесса, прежде чем продолжить выполнение.</li>
        <li>Возвращает код возврата дочернего процесса.</li>
      </ul>
    </li>

    <li>
      <strong><code>subprocess.Popen</code></strong>:
      <ul>
        <li><code>subprocess.Popen</code> используется для более продвинутой обработки процесса, обеспечивая больший контроль над вводом, выводом и потоками ошибок дочернего процесса.</li>
        <li>Он запускает команду в дочернем процессе, но программа Python не ожидает завершения дочернего процесса.</li>
        <li>Вы можете взаимодействовать с дочерним процессом, используя его потоки ввода и вывода.</li>
      </ul>
    </li>
  </ol>

  <p>
    Если вы рассматриваете использование многозадачности (threading) в Python, модуль <code>subprocess</code> сам по себе не связан с многозадачностью. Если вы хотите выполнить несколько подпроцессов параллельно, вам, возможно, стоит рассмотреть модуль <code>concurrent.futures</code>, который предоставляет высокоуровневый интерфейс для асинхронного выполнения функций в отдельных потоках или процессах.
  </p>

  <p class="note">
    Если у вас есть конкретный случай, связанный с многозадачностью и подпроцессами, предоставление дополнительных деталей поможет дать более целенаправленные рекомендации.
  </p>
    {/if}


</Layout>

<style>
  ul{
      margin-bottom: 1.5rem;
  }
  .tab {
    width: 20rem;
    height: 3px;
    display: inline;
  }
  li{
    font-size: 1.0rem;
    padding: 0.5rem 1.5rem;
    text-decoration: underline 2px solid gray;
  }
	video {
		border-radius: 0.25rem;
		max-height: 85vh;
		margin: auto;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
  
  p {
      font-size: 1rem;
  }
   code {
      display: inline-block;
      width: auto;
      max-width: 100%;
      white-space: pre;
      font-family: monospace;
      font-size: 0.9rem;
      padding: 0.25rem 0.75rem;
      border-radius: 0.3rem;
      background-color: #0e0e1e;
      color: #faaa9e;
      margin: -0.1rem;
      font-style: bold;
    }

    .comment {
      color: #5e7175;
      font-style: bold;
      font-size: 0.9rem;
    }

    .keyword {
      color: #de676a;
      font-weight: bold;
    }

    .string {
      color: #ce9178;
    }

    .number {
      color: #d7ba7d;
    }

    .variable {
      color: #dcdcdc;
    }

    .function {
      color: #6699cc;
    }

    .class {
      color: #dcdcaa;
    }

    .module {
      color: #d4d987;
    }

    .keyword,
    .string,
    .number,
    .variable,
    .function,
    .class,
    .module {
      margin-left: 2px;
      margin-right: 2px;
    }

    h3, h2, h4, h5, h6 {
      text-decoration: underline solid gray 2px;
      margin-bottom: 1.5rem;
    }
</style>
