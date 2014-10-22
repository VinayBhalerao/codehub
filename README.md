# Codehub [![Build Status](https://travis-ci.org/3scale/codehub.svg?branch=master)](https://travis-ci.org/3scale/codehub)

## How to contribute

1. Clone the repository 
``https://github.com/3scale/codehub.git``
2. Create a new page under *_posts* directory with name following the pattern: *YYYY-MM-DD-YourSnippetTitle.html*, where YYYY-MM-DD is the publish date of the snippet.
3. Add the front matter code at the top of the snippet file following the schema:

<pre><code>
---
layout: default
title: YOUR_SNIPPET_TITLE
categories: CATEGORIES_UNDER_WHICH_THE_SNIPPET_BELONGS
comments: true
excerpt: EXCERPT_OF_THE_SNIPPET
---
</code></pre>

4. Add the snippet description:

<pre><code>
<h1>{{ page.title }}</h1>
<dl>
<dt>Author:</dt>
<dd><a href="LINK-TO-GITHUB-ACCOUNT">AUTHOR</a></dd>
<dt>Version:</dt>
<dd>SNIPPET'S_VERSION_NUMBER</dd>
<dt>Language:</dt>
<dd>PROGRAMMING_LANGUAGE_THE_SNIPPET_IS_WRITTEN_IN</dd>
</dl>
<p><strong>A SHORT DESCRIPTION</strong></p>
</code></pre> 

5. Add the snippet code together with some additional comments/descriptions. The code itself will go between `{% highlight LANG linenos=table %}` and `{% endhighlight %}` liquid tags. In the place of the `LANG` placeholder you should put the proper language identifier, e.g. *lua*. The fill list of the supported languages can be found [here](http://pygments.org/docs/lexers/) under the *Short names* parameter.
6. Create a new branch for your snippet 
``git checkout -b BRANCHNAME``
7. Commit the branch to the repository:

<pre><code>
git add FILENMAE
git commit -m "COMMIT DESCRIPTION"
git push
</code></pre>

8. Create a pull request in the [CodeHub](https://github.com/3scale/codehub) repository.
9. Wait until it is merged and deployed

## Misc
The project is created using [Jekyll](http://jekyllrb.com) blogging platform using the [jekyll-lunr-js-search](https://github.com/slashdotdash/jekyll-lunr-js-search) plugin.