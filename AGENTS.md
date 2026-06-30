# AGENTS.md

## Project

This repository contains a NestJS WhatsApp chatbot focused on adolescent sexual and reproductive health education, safeguarding, referrals, and guided menu-based conversation flows.

## Primary goals

* Preserve safety, clarity, and consistency in health education content.
* Keep the chatbot conversational, supportive, and easy to navigate.
* Avoid repetitive or robotic transitions.
* Maintain bilingual alignment between English and Swahili flows.
* Keep production behavior reliable and reviewable.

---

## General working style

* Be conservative.
* Prefer small, reviewable diffs.
* Do not widen scope without a strong reason.
* Preserve existing architecture unless a change is clearly necessary.
* When uncertain, prefer structure changes over content rewrites.

---

## Health content rules

* Do not freely rewrite medical or health education wording.
* Preserve original educational wording as much as possible.
* If a node is too long, split it into smaller logical chunks without changing meaning.
* Do not paraphrase factual content unless absolutely necessary for structure.
* Do not add new medical claims unless explicitly instructed.
* Do not remove safeguarding or referral content unless explicitly instructed.
* FAQ nodes may remain longer than normal explanatory nodes.

### Priority rule

If there is a tradeoff between:

* better style, and
* preserving health meaning,

always preserve health meaning.

---

## Bilingual content rules

* English and Swahili flows should remain structurally aligned.
* Do not force literal translation if the existing Swahili is already appropriate.
* If splitting one language into multiple nodes, mirror the same structure in the other language.
* Do not leave one language updated while the matching language remains structurally outdated unless explicitly requested.

---

## Conversation flow rules

* Prefer smaller nodes with one main idea each.
* A large node may be split into:

  * intro / definition
  * explanation / process
  * reassurance / normalization
  * practical guidance
  * FAQ / related topics
* Do not force all subtopics into one rigid pattern; let the original content determine the best split.
* Avoid repetitive generic transitions such as:

  * Tell me more
  * Continue
  * Next
  * Learn more
* Prefer option labels that match the meaning of the next node.

### Example label families

Use these as guidance, not as a rigid requirement:

#### Understanding

* What happens next?
* How does this work?
* Explain this more

#### Reassurance

* Is this normal?
* Should I worry?

#### Practical help

* What can I do?
* Give me tips
* How should I stay clean?

#### Questions

* Common questions
* Things people ask

#### Exploration

* Related topics
* What else should I know?

#### Return / reset

* Back to the start
* Start again
* Main menu
* Back

For Swahili, use natural equivalents rather than rigid literal translations.

---

## Node type rules

* Use `NodeType.CONTENT` for explanatory content.
* Use `NodeType.RELATED_TOPICS` for genuine branching or nearby-topic exploration.
* Do not classify a node as related-topics if it is still mainly explanatory.
* Preserve `isStartNode`, `isEndNode`, `sortOrder`, and navigation integrity carefully when refactoring.

---

## Seed editing rules

When editing content seed files:

* keep changes scoped to the relevant category or subtopic
* preserve factual wording
* update both:

  * `contentNodes`
  * `contentNodeOptions`
* make sure `nextNodeKey` values remain valid
* keep English and Swahili versions aligned
* avoid introducing broken branches, orphan nodes, or duplicated node keys
* do not rename node keys unnecessarily unless required for a structural change

---

## Media rules

* `mediaAssetKey` should only be added where a node is intentionally meant to send an image.
* Do not invent media keys.
* Only use existing approved media keys or explicitly requested new ones.
* Preserve text-first meaning even when media is added.
* Image sending logic should remain non-blocking where appropriate.

---

## Reliability / WhatsApp behavior rules

* Do not blindly add retries to outbound WhatsApp sends.
* Timeouts may still result in delivery; avoid duplicate-risk behavior.
* Prefer logging and status visibility over aggressive retrying.
* Preserve idempotency protections.
* Do not remove queue safety, failure logging, or send-status visibility features unless explicitly requested.

---

## Cache and Redis rules

* Do not use broad destructive cache clearing when Redis is shared with queue data.
* Prefer versioned content cache strategies over global flushes.
* Be careful not to interfere with Bull queue keys when changing cache behavior.

---

## Migration and database rules

* Do not assume a fresh database can be rebuilt unless migrations clearly support it.
* Do not reorder migrations casually.
* Preserve migration safety and existing data assumptions.
* When adding entities, also ensure migration impact is considered.

---

## Refactoring rules

Use this order of preference:

1. improve structure
2. improve navigation labels
3. improve consistency
4. only then consider limited wording changes if explicitly requested

Do not:

* do broad “cleanup” unrelated to the requested task
* rewrite seed files wholesale without need
* change health content tone dramatically
* replace carefully written content with overly generic chatbot text

---

## Definition of done for flow-polish tasks

A flow-polish task is complete only when:

* original health meaning is preserved
* oversized nodes are split only where needed
* repetitive transitions are improved
* English and Swahili remain aligned
* node ordering makes conversational sense
* options and `nextNodeKey` references are valid
* the resulting diff is easy to review

---

## Preferred agent behavior

When working on content-flow refactors:

1. inspect current nodes first
2. propose a short plan
3. identify which nodes are too long or too repetitive
4. make conservative edits
5. summarize:

   * files changed
   * subtopics affected
   * structural changes made
   * any judgment calls or uncertainties

If uncertain whether to rewrite wording, do not rewrite it.
