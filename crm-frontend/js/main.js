(function() {
  const svgIcons = {
    arrowSort: `<svg class="arrow-sort-svg" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>
    </svg>`,
    phoneContact: `<svg class="contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="#9873FF"/>
    <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
    </svg>`,
    emailContact: `<svg class="contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
    </svg>`,
    facebookContact: `<svg class="contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
    </svg>`,
    vkContact: `<svg class="contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
    </svg>`,
    otherContact: `<svg class="contact-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
    </svg>`,
    editAction: `<svg class="edit-action-svg" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329V3.69329Z" fill="#9873FF"/>
    </svg>`,
    deleteAction: `<svg class="delete-action-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="currentColor"/>
    </svg>`,
    addClient: `<svg class="add-client-svg" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill="currentColor"/>
    </svg>`,
    addContact: `<svg class="add-contact-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.00001 3.66671C6.63334 3.66671 6.33334 3.96671 6.33334 4.33337V6.33337H4.33334C3.96668 6.33337 3.66668 6.63337 3.66668 7.00004C3.66668 7.36671 3.96668 7.66671 4.33334 7.66671H6.33334V9.66671C6.33334 10.0334 6.63334 10.3334 7.00001 10.3334C7.36668 10.3334 7.66668 10.0334 7.66668 9.66671V7.66671H9.66668C10.0333 7.66671 10.3333 7.36671 10.3333 7.00004C10.3333 6.63337 10.0333 6.33337 9.66668 6.33337H7.66668V4.33337C7.66668 3.96671 7.36668 3.66671 7.00001 3.66671ZM7.00001 0.333374C3.32001 0.333374 0.333344 3.32004 0.333344 7.00004C0.333344 10.68 3.32001 13.6667 7.00001 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 7.00001 0.333374ZM7.00001 12.3334C4.06001 12.3334 1.66668 9.94004 1.66668 7.00004C1.66668 4.06004 4.06001 1.66671 7.00001 1.66671C9.94001 1.66671 12.3333 4.06004 12.3333 7.00004C12.3333 9.94004 9.94001 12.3334 7.00001 12.3334Z" fill="#9873FF"/>
    </svg>`,
    addContactReverse: `<svg class="add-contact-reverse-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333313 7.00016C0.333313 3.32016 3.31998 0.333496 6.99998 0.333496C10.68 0.333496 13.6666 3.32016 13.6666 7.00016C13.6666 10.6802 10.68 13.6668 6.99998 13.6668C3.31998 13.6668 0.333313 10.6802 0.333313 7.00016ZM6.33329 4.33366C6.33329 3.96699 6.63329 3.66699 6.99996 3.66699C7.36663 3.66699 7.66663 3.96699 7.66663 4.33366V6.33366H9.66663C10.0333 6.33366 10.3333 6.63366 10.3333 7.00033C10.3333 7.36699 10.0333 7.66699 9.66663 7.66699H7.66663V9.66699C7.66663 10.0337 7.36663 10.3337 6.99996 10.3337C6.63329 10.3337 6.33329 10.0337 6.33329 9.66699V7.66699H4.33329C3.96663 7.66699 3.66663 7.36699 3.66663 7.00033C3.66663 6.63366 3.96663 6.33366 4.33329 6.33366H6.33329V4.33366Z" fill="currentColor"/>
    </svg>`,
    arrowDropdown: `<svg class="arrow-dropdown-svg" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.494999 0.689971C0.249999 0.934971 0.249999 1.32997 0.494999 1.57497L4.65 5.72997C4.845 5.92497 5.16 5.92497 5.355 5.72997L9.51 1.57497C9.755 1.32997 9.755 0.93497 9.51 0.68997C9.265 0.44497 8.87 0.44497 8.625 0.68997L5 4.30997L1.375 0.684972C1.135 0.444972 0.734999 0.444971 0.494999 0.689971Z" fill="#9873FF"/>
    </svg>`,
    largeSpin: `<svg class="large-spin-svg" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="36" stroke="#9873FF" stroke-width="8" stroke-dasharray="226" stroke-linecap="round"/>
    </svg>`,
    mediumSpin: `<svg class="medium-spin-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="#9873FF" stroke-width="4" stroke-dasharray="113" stroke-linecap="round"/>
    </svg>`,
    smallSpin: `<svg class="small-spin-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="2" stroke-dasharray="31" stroke-linecap="round"/>
    </svg>`,
  };

  let localData = [];
  let searchData = [];
  let columnSort;
  let directionSort;
  let highlighter = -1;

  function createHeader({ onSearch }) {
    const $header = document.createElement('header');
    const $headerContainer = document.createElement('div');
    const $logo = document.createElement('a');
    const $searchForm = document.createElement('form');
    const $searchInput = document.createElement('input');
    const $searchListWrap = document.createElement('div');
    const $searchSimplebar = document.createElement('div');
    const $searchList = document.createElement('ul');
    const $searchClearBtn = document.createElement('button');

    let timeoutID;
    let queryParam;

    $header.classList.add('header');
    $headerContainer.classList.add('container', 'header__container');
    $logo.classList.add('header__logo');
    $searchForm.classList.add('header__search-form');
    $searchInput.classList.add('header__search-input');
    $searchListWrap.classList.add('header__search-list-wrap');
    $searchSimplebar.classList.add('header__search-simplebar');
    $searchList.classList.add('list-reset', 'header__search-list');
    $searchClearBtn.classList.add('btn-reset', 'header__search-clear-btn', 'hidden');

    $logo.textContent = 'skb.';
    $searchInput.placeholder = 'Введите запрос';
    $searchInput.autocomplete = 'off';
    $searchInput.spellcheck = false;
    $searchClearBtn.type = 'reset';

    function checkQueryParam() {
      const searchParam = $searchInput.value.toLowerCase().replaceAll('	', ' ').split(' ').filter(text => text.length > 0);

      if (searchParam.length) {
        let query = queryParam != searchParam[0];

        if (query) {
          queryParam = searchParam[0];
        }

        if (!searchData.length) {
          query = true;
        }

        onSearch(searchParam, query);
      }
    }

    function timeoutKeypress() {
      clearTimeout(timeoutID);

      timeoutID = setTimeout(checkQueryParam, 300);
    }

    function resetSearchList() {
      $searchListWrap.classList.remove('is-active');

      $searchList.innerHTML = '';
    }

    $searchForm.addEventListener('submit', e => {
      e.preventDefault();

      checkQueryParam();
    });

    $searchInput.addEventListener('input', () => {
      if ($searchInput.value) {
        $searchClearBtn.classList.remove('hidden');
      } else {
        $searchClearBtn.click();
      }

      timeoutKeypress();
    });

    $searchInput.addEventListener('click', () => {
      checkQueryParam();
    });

    $searchInput.addEventListener('keydown', e => {
      const activeSearchList = $searchListWrap.classList.contains('is-active');
      const searchList = $searchList.childNodes;

      if (activeSearchList) {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();

            checkHighlighter(searchList);

            highlighter++;

            setHighlighted(searchList);

            searchList[highlighter].scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });

            $searchInput.value = searchList[highlighter].children[0].textContent;

            break;
          case 'ArrowUp':
            e.preventDefault();

            checkHighlighter(searchList);

            highlighter--;

            setHighlighted(searchList);

            searchList[highlighter].scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });

            $searchInput.value = searchList[highlighter].children[0].textContent;

            break;
          case 'Enter':
            e.preventDefault();

            checkHighlighter(searchList);

            if (highlighter >= 0) {
              const currentElement = searchList[highlighter];
              const clientId = currentElement.dataset.searchId;

              $searchInput.value = currentElement.children[0].textContent;

              resetSearchList();

              highlightClient(clientId);
            } else {
              let elementMatchList = [];

              searchList.forEach(element => {
                if ($searchInput.value === element.children[0].textContent) {
                  elementMatchList.push(element);
                }
              });

              if (elementMatchList.length) {
                $searchList.innerHTML = '';

                elementMatchList.forEach(element => {
                  $searchList.append(element);

                  if (elementMatchList.length === 1) {
                    const clientId = element.dataset.searchId;

                    $searchListWrap.classList.remove('is-active');

                    highlightClient(clientId);
                  }
                });
              }
            }

            break;
          case 'Escape':
            resetSearchList();

            break;
        }
      }
    });

    $searchClearBtn.addEventListener('click', () => {
      $searchClearBtn.classList.add('hidden');

      resetSearchList();

      $searchInput.focus();
    });

    $header.append($headerContainer);
    $headerContainer.append($logo, $searchForm);
    $searchForm.append($searchInput, $searchListWrap, $searchClearBtn);
    $searchListWrap.append($searchSimplebar);
    $searchSimplebar.append($searchList);

    new SimpleBar($searchSimplebar, { autoHide: false });

    return $header;
  }

  function createSearchList(searchData, searchParam) {
    const searchListWrap = document.querySelector('.header__search-list-wrap');
    const searchList = document.querySelector('.header__search-list');

    searchList.innerHTML = '';

    searchParam.sort((a, b) => b.length - a.length);

    searchParam.forEach(param => {
      searchData = searchData.filter(client => [
        client.surname,
        client.name,
        client.lastName,
        ...client.contacts.map(({ value }) => value)
      ]
      .some(str => str.toLowerCase().includes(param))
      );
    });

    getSortData(searchData, 'fullName', true);

    searchData.forEach(client => {
      const $searchItem = document.createElement('li');
      const $searchItemText = document.createElement('span');
      const $searchItemContact = document.createElement('span');
      const $searchItemID = document.createElement('small');

      const clientValue = [
        client.surname,
        client.name,
        client.lastName,
        ...client.contacts.map(({ value }) => value)
      ];

      $searchItem.classList.add('header__search-item');
      $searchItemText.classList.add('header__search-item-text');
      $searchItemContact.classList.add('header__search-item-contact');
      $searchItemID.classList.add('header__search-item-id');

      $searchItem.dataset.searchId = client.id;
      $searchItemText.innerHTML = `${client.surname} ${client.name} ${client.lastName}`.trim();
      $searchItemID.innerHTML = 'ID: ' + client.id;

      searchParam.forEach(param => {
        clientValue.forEach(value => {
          const containsParam = value.toLowerCase().includes(param);

          if (containsParam) {
            const i = clientValue.indexOf(value);
            const iFirst = clientValue[i].toLowerCase().indexOf(param);
            const iLast = iFirst + param.length;
            const selectedText = clientValue[i].slice(iFirst, iLast);

            if (i < 3) {
              const containsBold = clientValue[i].includes('<b>');

              if (!containsBold) {
                clientValue[i] = clientValue[i].replace(selectedText, `<b>${selectedText}</b>`);

                $searchItemText.innerHTML = `${clientValue[0]} ${clientValue[1]} ${clientValue[2]}`.trim();
              }
            } else {
              $searchItemContact.innerHTML = clientValue[i].slice(0, iFirst) + `<b>${selectedText}</b>` + clientValue[i].slice(iLast);
            }
          }
        });
      });

      searchList.append($searchItem);
      $searchItem.append($searchItemText, $searchItemContact, $searchItemID);
    });

    if (searchList.childElementCount) {
      searchListWrap.classList.add('is-active');
    } else {
      searchListWrap.classList.remove('is-active');
    }

    setHighlightedHover(searchList.childNodes);

    highlighter = -1;
  }

  function createMain() {
    const $main = document.createElement('main');
    const $mainContainer = document.createElement('div');
    const $addClientBtn = document.createElement('button');
    const $addClientText = document.createElement('span');
    const $tableWrap = document.createElement('div');
    const $tableSimplebar = document.createElement('div');
    const $tablePreloader = document.createElement('div');
    const $preloaderLarge = document.createElement('div');
    const $preloaderMedium = document.createElement('div');
    const $tableError = document.createElement('div');
    const $table = document.createElement('table');
    const $caption = document.createElement('caption');
    const $thead = document.createElement('thead');
    const $theadTR = document.createElement('tr');
    const $idTH = document.createElement('th');
    const $fullNameTH = document.createElement('th');
    const $createdTH = document.createElement('th');
    const $updatedTH = document.createElement('th');
    const $contactsTH = document.createElement('th');
    const $actionsTH = document.createElement('th');
    const $idBtn = document.createElement('button');
    const $fullNameBtn = document.createElement('button');
    const $createdBtn = document.createElement('button');
    const $updatedBtn = document.createElement('button');
    const $idIcon = document.createElement('span');
    const $fullNameIcon = document.createElement('span');
    const $createdIcon = document.createElement('span');
    const $updatedIcon = document.createElement('span');
    const $tbody = document.createElement('tbody');

    $main.classList.add('main');
    $mainContainer.classList.add('container', 'main__container');
    $addClientBtn.classList.add('btn-reset', 'main__add-client-btn', 'hidden');
    $addClientText.classList.add('main__add-client-text');
    $tableWrap.classList.add('main__table-wrap');
    $tableSimplebar.classList.add('main__table-simplebar');
    $tablePreloader.classList.add('main__table-preloader');
    $preloaderLarge.classList.add('large-preloader');
    $preloaderMedium.classList.add('medium-preloader');
    $tableError.classList.add('main__table-error');
    $table.classList.add('table');
    $caption.classList.add('table__caption');
    $thead.classList.add('table__thead');
    $theadTR.classList.add('table__thead-tr');
    $idTH.classList.add('table__th', 'table__th--id');
    $fullNameTH.classList.add('table__th', 'table__th--fullname');
    $createdTH.classList.add('table__th', 'table__th--created');
    $updatedTH.classList.add('table__th', 'table__th--updated');
    $contactsTH.classList.add('table__th', 'table__th--contacts');
    $actionsTH.classList.add('table__th', 'table__th--actions');
    $idBtn.classList.add('btn-reset', 'table__th-btn', 'table__th-btn--id');
    $fullNameBtn.classList.add('btn-reset', 'table__th-btn', 'table__th-btn--fullname');
    $createdBtn.classList.add('btn-reset', 'table__th-btn', 'table__th-btn--created');
    $updatedBtn.classList.add('btn-reset', 'table__th-btn', 'table__th-btn--updated');
    $idIcon.classList.add('table__th-icon');
    $fullNameIcon.classList.add('table__th-icon');
    $createdIcon.classList.add('table__th-icon');
    $updatedIcon.classList.add('table__th-icon');
    $tbody.classList.add('table__tbody');

    $idBtn.dataset.sort = 'id';
    $fullNameBtn.dataset.sort = 'fullName';
    $createdBtn.dataset.sort = 'createdAt';
    $updatedBtn.dataset.sort = 'updatedAt';

    $addClientText.textContent = 'Добавить клиента';
    $tableError.textContent = 'Что-то пошло не так...';
    $caption.textContent = 'Клиенты';
    $idBtn.textContent = 'ID';
    $fullNameBtn.textContent = 'Фамилия Имя Отчество';
    $createdBtn.textContent = 'Дата и время создания';
    $updatedBtn.textContent = 'Последние изменения';
    $contactsTH.textContent = 'Контакты';
    $actionsTH.textContent = 'Действия';

    $addClientBtn.innerHTML = svgIcons.addClient;
    $preloaderLarge.innerHTML = svgIcons.largeSpin;
    $preloaderMedium.innerHTML = svgIcons.mediumSpin;
    $idIcon.innerHTML = svgIcons.arrowSort;
    $fullNameIcon.innerHTML = svgIcons.arrowSort;
    $createdIcon.innerHTML = svgIcons.arrowSort;
    $updatedIcon.innerHTML = svgIcons.arrowSort;

    [$idBtn, $fullNameBtn, $createdBtn, $updatedBtn].forEach(btn => {
      btn.disabled = true;

      btn.addEventListener('click', () => {
        if ($tbody.childElementCount) {
          setActiveColumn(btn);

          createClientList(localData, columnSort, directionSort);
        }
      });
    });

    $addClientBtn.addEventListener('click', () => {
      const modalElement = createModalForm(null, handlers);

      document.body.prepend(modalElement);

      overlayModal(modalElement);
    });

    $main.append($mainContainer);
    $mainContainer.append($tableWrap, $addClientBtn);
    $addClientBtn.append($addClientText);
    $tableWrap.append($tableSimplebar, $tablePreloader, $tableError);
    $tablePreloader.append($preloaderLarge, $preloaderMedium);
    $tableSimplebar.append($table);
    $table.append($caption, $thead, $tbody);
    $thead.append($theadTR);
    $theadTR.append($idTH, $fullNameTH, $createdTH, $updatedTH, $contactsTH, $actionsTH);
    $idTH.append($idBtn);
    $fullNameTH.append($fullNameBtn);
    $createdTH.append($createdBtn);
    $updatedTH.append($updatedBtn);
    $idBtn.append($idIcon);
    $fullNameBtn.append($fullNameIcon);
    $createdBtn.append($createdIcon);
    $updatedBtn.append($updatedIcon);

    new SimpleBar($tableSimplebar, { autoHide: false });

    return $main;
  }

  function createClientList(data, column, direction) {
    const clientsList = document.querySelector('.table__tbody');

    clientsList.innerHTML = '';

    getSortData(data, column, direction);

    data.forEach(client => {
      clientsList.append(
        createClientItem(client)
      );
    });
  }

  function createClientItem(client) {
    const $tbodyTR = document.createElement('tr');
    const $idTD = document.createElement('td');
    const $fullNameTD = document.createElement('td');
    const $createdTD = document.createElement('td');
    const $updatedTD = document.createElement('td');
    const $contactsTD = document.createElement('td');
    const $actionsTD = document.createElement('td');
    const $createdDate = document.createElement('span');
    const $createdTime = document.createElement('span');
    const $updatedDate = document.createElement('span');
    const $updatedTime = document.createElement('span');
    const $contactList = document.createElement('ul');
    const $unionBtn = document.createElement('button');
    const $actionWrap = document.createElement('div');
    const $editBtn = document.createElement('button');
    const $editText = document.createElement('span');
    const $editPreloader = document.createElement('div');
    const $deleteBtn = document.createElement('button');
    const $deleteText = document.createElement('span');
    const $deletePreloader = document.createElement('div');

    $tbodyTR.classList.add('table__tbody-tr');
    $idTD.classList.add('table__td', 'table__td--id');
    $fullNameTD.classList.add('table__td', 'table__td--fullname');
    $createdTD.classList.add('table__td', 'table__td--created');
    $updatedTD.classList.add('table__td', 'table__td--updated');
    $contactsTD.classList.add('table__td', 'table__td--contacts');
    $actionsTD.classList.add('table__td', 'table__td--actions');
    $createdDate.classList.add('table__td-created-date');
    $createdTime.classList.add('table__td-created-time');
    $updatedDate.classList.add('table__td-updated-date');
    $updatedTime.classList.add('table__td-updated-time');
    $contactList.classList.add('list-reset', 'table__td-contact-list');
    $unionBtn.classList.add('btn-reset', 'table__td-contact-union-btn', 'hidden');
    $actionWrap.classList.add('table__td-action-wrap');
    $editBtn.classList.add('btn-reset', 'table__td-edit-btn');
    $editText.classList.add('table__td-edit-text');
    $editPreloader.classList.add('small-preloader', 'table__td-edit-preloader');
    $deleteBtn.classList.add('btn-reset', 'table__td-delete-btn');
    $deleteText.classList.add('table__td-delete-text');
    $deletePreloader.classList.add('small-preloader', 'table__td-delete-preloader');

    $tbodyTR.dataset.id = client.id;

    $idTD.textContent = client.id;
    $fullNameTD.textContent = `${client.surname} ${client.name} ${client.lastName}`;
    $createdDate.textContent = setFormatTime(client.createdAt).date;
    $createdTime.textContent = setFormatTime(client.createdAt).time;
    $updatedDate.textContent = setFormatTime(client.updatedAt).date;
    $updatedTime.textContent = setFormatTime(client.updatedAt).time;
    $editBtn.innerHTML = svgIcons.editAction;
    $editText.textContent = 'Изменить';
    $editPreloader.innerHTML = svgIcons.smallSpin;
    $deleteBtn.innerHTML = svgIcons.deleteAction;
    $deleteText.textContent = 'Удалить';
    $deletePreloader.innerHTML = svgIcons.smallSpin;

    function setFormatTime(item) {
      const date = `${item.substring(8, 10)}.${item.substring(5, 7)}.${item.substring(0, 4)}`;
      const time = item.substring(11, 16);

      return {
        date,
        time,
      };
    }

    client.contacts.forEach(contact => {
      $contactList.append(
        createClientContact(contact)
      );
    });

    if ($contactList.childElementCount > 4) {
      $contactList.childNodes.forEach((item, i) => {
        if (i > 3) {
          item.classList.add('hidden');
        }
      });

      $unionBtn.textContent = `+${$contactList.childElementCount - 4}`;

      $unionBtn.classList.remove('hidden');
    }

    $unionBtn.addEventListener('click', () => {
      document.querySelectorAll('.table__td-contact-union-btn').forEach(btn => {
        if (btn.textContent) {
          btn.classList.remove('hidden');
        }
      });

      document.querySelectorAll('.table__td-contact-item').forEach(item => {
        item.classList.remove('visible');
      });

      $unionBtn.classList.add('hidden');

      $contactList.childNodes.forEach((item, i) => {
        if (i > 3) {
          item.classList.add('visible');
        }
      });
    });

    $editBtn.addEventListener('click', () => {
      $editBtn.classList.add('is-active');

      window.location.hash = client.id;
    });

    $deleteBtn.addEventListener('click', () => {
      $deleteBtn.classList.add('is-active');

      getClient(client.id);
    });

    $tbodyTR.append($idTD, $fullNameTD, $createdTD, $updatedTD, $contactsTD, $actionsTD);
    $createdTD.append($createdDate, $createdTime);
    $updatedTD.append($updatedDate, $updatedTime);
    $contactsTD.append($contactList, $unionBtn);
    $actionsTD.append($actionWrap);
    $actionWrap.append($editBtn, $deleteBtn);
    $editBtn.append($editText, $editPreloader);
    $deleteBtn.append($deleteText, $deletePreloader);

    return $tbodyTR;
  }

  function createClientContact(contact) {
    const $contactItem = document.createElement('li');
    const $contactBtn = document.createElement('button');
    const $contactTooltip = document.createElement('span');
    const $tooltipContent = document.createElement('span');
    const $tooltipLink = document.createElement('a');

    $contactItem.classList.add('table__td-contact-item');
    $contactBtn.classList.add('btn-reset', 'tooltip-btn', 'table__td-contact-btn');
    $contactTooltip.classList.add('tooltip', 'table__td-contact-tooltip');
    $tooltipContent.classList.add('tooltip-content', 'table__td-tooltip-content');
    $tooltipLink.classList.add('table__td-tooltip-link');
    $tooltipLink.tabIndex = '-1';

    function createMaskTel(tel) {
      let inMask;

      if (tel.length === 12 && tel.substring(0, 2) === '+7') {
        inMask = `+7 (${tel.substring(2, 5)}) ${tel.substring(5, 8)}-${tel.substring(8, 10)}-${tel.substring(10)}`;
      } else if (tel.length === 11 && tel.substring(0, 1) === '8') {
        inMask = `8 (${tel.substring(1, 4)}) ${tel.substring(4, 7)}-${tel.substring(7, 9)}-${tel.substring(9)}`;
      } else {
        inMask = tel;
      }

      return inMask;
    }

    switch (contact.type) {
      case 'Телефон':
        $contactBtn.innerHTML = svgIcons.phoneContact;
        $tooltipContent.textContent = `${contact.type}: `;
        $tooltipLink.textContent = createMaskTel(contact.value);

        $tooltipLink.href = `tel:${contact.value}`;

        $tooltipLink.classList.add('table__td-tooltip-link--href');

        break;
      case 'Email':
        $contactBtn.innerHTML = svgIcons.emailContact;
        $tooltipContent.textContent = `${contact.type}: `;
        $tooltipLink.textContent = contact.value;

        $tooltipLink.href = `mailto:${contact.value}`;

        $tooltipLink.classList.add('table__td-tooltip-link--href');

        break;
      case 'Facebook':
        $contactBtn.innerHTML = svgIcons.facebookContact;
        $tooltipContent.textContent = `${contact.type}: `;
        $tooltipLink.textContent = contact.value;

        $tooltipLink.href = contact.value;

        $tooltipLink.classList.add('table__td-tooltip-link--href-underline');

        break;
      case 'VK':
        $contactBtn.innerHTML = svgIcons.vkContact;
        $tooltipContent.textContent = `${contact.type}: `;
        $tooltipLink.textContent = contact.value;

        $tooltipLink.href = contact.value;

        $tooltipLink.classList.add('table__td-tooltip-link--href-underline');

        break;
      case 'Другое':
        $contactBtn.innerHTML = svgIcons.otherContact;
        $tooltipContent.textContent = `${contact.type}: `;
        $tooltipLink.textContent = contact.value;
    }

    $contactBtn.addEventListener('mouseover', () => {
      document.querySelectorAll('.table__td-contact-btn').forEach(btn => {
        if (btn === $contactBtn) {
          $contactBtn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    });

    $contactBtn.addEventListener('mouseout', () => {
      document.querySelectorAll('.table__td-contact-btn').forEach(btn => {
        btn.classList.remove('is-active');
      });
    });

    $contactItem.append($contactBtn, $contactTooltip);
    $contactTooltip.append($tooltipContent);
    $tooltipContent.append($tooltipLink);

    return $contactItem;
  }

  function createModalForm(client, { onSave, onClose }) {
    const $modal = document.createElement('div');
    const $modalContainer = document.createElement('div');
    const $modalCloseBtn = document.createElement('button');
    const $title = document.createElement('h2');
    const $textId = document.createElement('span');
    const $form = document.createElement('form');
    const $surnameWrap = document.createElement('div');
    const $surnameInput = document.createElement('input');
    const $surnameLabel = document.createElement('label');
    const $nameWrap = document.createElement('div');
    const $nameInput = document.createElement('input');
    const $nameLabel = document.createElement('label');
    const $lastNameWrap = document.createElement('div');
    const $lastNameInput = document.createElement('input');
    const $lastNameLabel = document.createElement('label');
    const $contacts = document.createElement('div');
    const $contactList = document.createElement('ul');
    const $contactAddBtn = document.createElement('button');
    const $contactAddIcon = document.createElement('span');
    const $contactAddText = document.createElement('span');
    const $error = document.createElement('div');
    const $saveBtn = document.createElement('button');
    const $savePreloader = document.createElement('div');
    const $deleteBtn = document.createElement('button');

    $modal.classList.add('modal');
    $modalContainer.classList.add('modal__container');
    $modalCloseBtn.classList.add('btn-reset', 'modal__close-btn');
    $title.classList.add('modal__title');
    $textId.classList.add('modal__text-id');
    $form.classList.add('modal__form');
    $surnameWrap.classList.add('modal__input-wrap');
    $nameWrap.classList.add('modal__input-wrap');
    $lastNameWrap.classList.add('modal__input-wrap', 'modal__input-wrap--last');
    $surnameInput.classList.add('modal__input', 'is-required');
    $nameInput.classList.add('modal__input', 'is-required');
    $lastNameInput.classList.add('modal__input');
    $surnameLabel.classList.add('modal__label', 'modal__label--mark');
    $nameLabel.classList.add('modal__label', 'modal__label--mark');
    $lastNameLabel.classList.add('modal__label');
    $contacts.classList.add('modal__contacts');
    $contactList.classList.add('list-reset', 'modal__contact-list');
    $contactAddBtn.classList.add('btn-reset', 'modal__contact-add-btn');
    $contactAddIcon.classList.add('modal__contact-add-icon');
    $contactAddText.classList.add('modal__contact-add-text');
    $error.classList.add('modal__error');
    $saveBtn.classList.add('btn-reset', 'modal__primary-btn');
    $savePreloader.classList.add('small-preloader', 'modal__primary-btn-preloader');
    $deleteBtn.classList.add('btn-reset', 'modal__secondary-btn');

    $title.textContent = 'Новый клиент';
    $surnameLabel.textContent = 'Фамилия';
    $nameLabel.textContent = 'Имя';
    $lastNameLabel.textContent = 'Отчество';

    $surnameInput.name = 'surname';
    $nameInput.name = 'name';
    $lastNameInput.name = 'lastName';
    $surnameInput.autocomplete = 'off';
    $nameInput.autocomplete = 'off';
    $lastNameInput.autocomplete = 'off';
    $surnameInput.spellcheck = false;
    $nameInput.spellcheck = false;
    $lastNameInput.spellcheck = false;

    $contactAddBtn.type = 'button';
    $contactAddBtn.innerHTML = svgIcons.addContact;
    $contactAddIcon.innerHTML = svgIcons.addContactReverse;
    $contactAddText.textContent = 'Добавить контакт';

    $saveBtn.type = 'submit';
    $saveBtn.textContent = 'Сохранить';
    $savePreloader.innerHTML = svgIcons.smallSpin;
    $deleteBtn.type = 'button';
    $deleteBtn.textContent = 'Отмена';

    if (client) {
      $title.textContent = 'Изменить данные';
      $surnameInput.value = client.surname;
      $nameInput.value = client.name;
      $lastNameInput.value = client.lastName;
      $deleteBtn.textContent = 'Удалить клиента';
      $textId.textContent = `ID: ${client.id}`;

      client.contacts.forEach(contact => {
        const contactItem = createModalContact(contact);

        $contactList.append(contactItem);

        $contacts.classList.add('is-active');
        contactItem.classList.add('add');

        if ($contactList.childElementCount >= 10) {
          $contactAddBtn.disabled = true;
        }
      });
    }

    $form.addEventListener('submit', e => {
      e.preventDefault();

      const errorList = checkValidation();
      const data = {};

      data.surname = $surnameInput.value;
      data.name = $nameInput.value;
      data.lastName = $lastNameInput.value;
      data.contacts = [];

      $contactList.querySelectorAll('.modal__contact-item').forEach(item => {
        const dropdown = item.querySelector('.modal__dropdown-btn');
        const input = item.querySelector('.modal__contact-input');
        const contact = {
          type: dropdown.textContent,
          value: input.value,
        };

        data.contacts.push(contact);
      });

      if (!errorList.length) {
        $form.querySelectorAll('input').forEach(input => {
          input.disabled = true;
        });

        $saveBtn.classList.add('is-active');

        if (client) {
          onSave(data, $modal, client.id);
        } else {
          onSave(data, $modal);
        }
      } else {
        $saveBtn.disabled = true;

        $error.innerHTML = '';

        createErrorItem(errorList, $error);
      }
    });

    $deleteBtn.addEventListener('click', () => {
      if (client) {
        const modalElement = createModalDelete(client, handlers);

        onClose($modal);

        document.body.prepend(modalElement);

        overlayModal(modalElement);
      } else {
        $modalCloseBtn.click();
      }
    });

    $modalCloseBtn.addEventListener('click', () => {
      onClose($modal);
    });

    [$surnameInput, $nameInput, $lastNameInput].forEach(input => {
      if (input.value) {
        input.classList.add('is-active');
      }

      input.addEventListener('focus', () => {
        input.classList.add('is-active');
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.classList.remove('is-active');
        }
      });

      input.addEventListener('input', () => {
        if ($error.childElementCount) {
          const errorList = checkValidation();

          $error.innerHTML = '';

          createErrorItem(errorList, $error);

          if (!$error.childElementCount) {
            $saveBtn.disabled = false;
          }
        }
      });
    });

    $contactAddBtn.addEventListener('click', () => {
      const contactItem = createModalContact();

      $contactList.append(contactItem);

      if ($contactList.childElementCount >= 10) {
        $contactAddBtn.disabled = true;
      }

      setTimeout(() => {
        $contacts.classList.add('is-active');
        contactItem.classList.add('add');
      }, 100);
    });

    document.querySelector('.main__add-client-btn').disabled = true;

    $modal.append($modalContainer);
    $modalContainer.append($modalCloseBtn, $title, $textId, $form);
    $form.append($surnameWrap, $nameWrap, $lastNameWrap, $contacts, $error, $saveBtn, $deleteBtn);
    $contacts.append($contactList, $contactAddBtn);
    $contactAddBtn.append($contactAddIcon, $contactAddText);
    $saveBtn.append($savePreloader);
    $surnameWrap.append($surnameInput, $surnameLabel);
    $nameWrap.append($nameInput, $nameLabel);
    $lastNameWrap.append($lastNameInput, $lastNameLabel);

    return $modal;
  }

  function createModalContact(contact) {
    const $contactItem = document.createElement('li');
    const $contactDropdown = document.createElement('div');
    const $dropdownBtn = document.createElement('button');
    const $dropdownIcon = document.createElement('span');
    const $dropdownList = document.createElement('ul');
    const $contactInput = document.createElement('input');
    const $contactDeleteBtn = document.createElement('button');
    const $contactDeleteIcon = document.createElement('span');
    const $deleteTooltip = document.createElement('span');
    const $deleteTooltipContent = document.createElement('span');

    const contactTypeList = [
      'Телефон',
      'Email',
      'Facebook',
      'VK',
      'Другое',
    ];

    let iSelected;

    $contactItem.classList.add('modal__contact-item');
    $contactDropdown.classList.add('modal__contact-dropdown');
    $dropdownBtn.classList.add('btn-reset', 'modal__dropdown-btn');
    $dropdownIcon.classList.add('modal__dropdown-icon');
    $dropdownList.classList.add('list-reset', 'modal__dropdown-list');
    $contactInput.classList.add('modal__contact-input');
    $contactDeleteBtn.classList.add('btn-reset', 'tooltip-btn', 'modal__contact-delete-btn', 'hidden');
    $contactDeleteIcon.classList.add('modal__contact-delete-icon');
    $deleteTooltip.classList.add('tooltip', 'modal__contact-delete-tooltip');
    $deleteTooltipContent.classList.add('tooltip-content', 'modal__contact-delete-tooltip-content');

    $dropdownBtn.type = 'button';
    $dropdownBtn.textContent = 'Телефон';
    $dropdownIcon.innerHTML = svgIcons.arrowDropdown;
    $contactInput.placeholder = 'Введите данные контакта';
    $contactInput.autocomplete = 'off';
    $contactInput.spellcheck = false;
    $contactDeleteBtn.type = 'button';
    $contactDeleteIcon.innerHTML = svgIcons.deleteAction;
    $deleteTooltipContent.textContent = 'Удалить контакт';

    contactTypeList.forEach(contactType => {
      const $dropdownItem = document.createElement('li');

      $dropdownItem.classList.add('modal__dropdown-item');

      $dropdownItem.textContent = contactType;

      $dropdownList.append($dropdownItem);

      if (contact) {
        $contactDeleteBtn.classList.remove('hidden');

        $dropdownBtn.textContent = contact.type;
        $contactInput.value = contact.value;
      }

      if ($dropdownItem.textContent === $dropdownBtn.textContent) {
        $dropdownItem.classList.add('is-selected');
      }

      $dropdownItem.addEventListener('click', () => {
        $dropdownBtn.textContent = $dropdownItem.textContent;

        $contactDropdown.classList.remove('is-active');

        $dropdownList.childNodes.forEach(item => {
          item.classList.remove('is-selected', 'highlighted');
        });

        $dropdownItem.classList.add('is-selected');
      });

      setHighlightedHover($dropdownList.childNodes);
    });

    $contactItem.addEventListener('click', () => {
      $contactDeleteBtn.classList.remove('hidden');
    });

    $dropdownBtn.addEventListener('click', () => {
      let count = 0;
      highlighter = -1;
      iSelected = null;

      $contactDropdown.classList.toggle('is-active');

      document.querySelectorAll('.modal__contact-dropdown').forEach(dropdown => {
        if (dropdown !== $contactDropdown) {
          dropdown.classList.remove('is-active');
        }
      });

      resetHighlighted($dropdownList.childNodes);

      $dropdownList.childNodes.forEach(item => {
        const containsSelected = item.classList.contains('is-selected');

        if (containsSelected) {
          iSelected = count;
        } else {
          count++;
        }
      });
    });

    $dropdownBtn.addEventListener('keydown', e => {
      const activeContactDropdown = $contactDropdown.classList.contains('is-active');
      const dropdownList = $dropdownList.childNodes;

      if (activeContactDropdown) {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();

            checkHighlighter(dropdownList);

            highlighter++;

            setHighlighted(dropdownList);

            if (highlighter === iSelected) {
              highlighter++;
            }

            setHighlighted(dropdownList);

            break;
          case 'ArrowUp':
            e.preventDefault();

            checkHighlighter(dropdownList);

            highlighter--;

            setHighlighted(dropdownList);

            if (highlighter === iSelected) {
              highlighter--;
            }

            setHighlighted(dropdownList);

            break;
          case 'Enter':
            e.preventDefault();

            checkHighlighter(dropdownList);

            if (highlighter >= 0) {
              dropdownList[highlighter].click();
            } else {
              $dropdownBtn.click();
            }

            break;
          case 'Escape':
            $dropdownBtn.click();

            break;
        }
      }
    });

    $contactInput.addEventListener('input', () => {
      const error = document.querySelector('.modal__error');
      const saveBtn = document.querySelector('.modal__primary-btn');

      if (error.childElementCount) {
        const errorList = checkValidation();

        error.innerHTML = '';

        createErrorItem(errorList, error);

        if (!error.childElementCount) {
          saveBtn.disabled = false;
        }
      }
    });

    $contactDeleteBtn.addEventListener('click', () => {
      const contacts = document.querySelector('.modal__contacts');
      const contactList = document.querySelector('.modal__contact-list');
      const contactAddBtn = document.querySelector('.modal__contact-add-btn');
      const error = document.querySelector('.modal__error');
      const saveBtn = document.querySelector('.modal__primary-btn');

      $contactItem.classList.remove('add');
      $contactItem.classList.add('remove');

      if (contactList.childElementCount === 1) {
        contacts.classList.remove('is-active');
      } else if (contactList.childElementCount <= 10) {
        contactAddBtn.disabled = false;
      }

      setTimeout(() => {
        $contactItem.remove();

        if (error.childElementCount) {
          const errorList = checkValidation();

          error.innerHTML = '';

          createErrorItem(errorList, error);

          if (!error.childElementCount) {
            saveBtn.disabled = false;
          }
        }
      }, 200);
    });

    $contactDeleteBtn.addEventListener('mouseover', () => {
      document.querySelectorAll('.modal__contact-delete-btn').forEach(btn => {
        if (btn === $contactDeleteBtn) {
          $contactDeleteBtn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    });

    $contactDeleteBtn.addEventListener('mouseout', () => {
      document.querySelectorAll('.modal__contact-delete-btn').forEach(btn => {
        btn.classList.remove('is-active');
      });
    });

    $contactItem.append($contactDropdown, $contactInput, $contactDeleteBtn);
    $contactDropdown.append($dropdownBtn, $dropdownIcon, $dropdownList);
    $contactDeleteBtn.append($contactDeleteIcon);
    $contactDeleteIcon.append($deleteTooltip);
    $deleteTooltip.append($deleteTooltipContent);

    return $contactItem;
  }

  function createErrorItem(list, errorElement) {
    list.forEach(item => {
      const $errorItem = document.createElement('small');

      $errorItem.classList.add('modal__error-item');

      $errorItem.textContent = item;

      errorElement.append($errorItem);
    });
  }

  function createModalDelete(client, { onDelete, onClose }) {
    const $modal = document.createElement('div');
    const $modalContainer = document.createElement('div');
    const $modalCloseBtn = document.createElement('button');
    const $title = document.createElement('h2');
    const $text = document.createElement('p');
    const $deleteBtn = document.createElement('button');
    const $deletePreloader = document.createElement('div');
    const $cancelBtn = document.createElement('button');

    $modal.classList.add('modal');
    $modalContainer.classList.add('modal__container');
    $modalCloseBtn.classList.add('btn-reset', 'modal__close-btn');
    $title.classList.add('modal__title', 'modal__title--delete');
    $text.classList.add('modal__text');
    $deleteBtn.classList.add('btn-reset', 'modal__primary-btn');
    $deletePreloader.classList.add('small-preloader', 'modal__primary-btn-preloader');
    $cancelBtn.classList.add('btn-reset', 'modal__secondary-btn');

    $title.textContent = 'Удалить клиента';
    $text.textContent = 'Вы действительно хотите удалить данного клиента?';
    $deleteBtn.textContent = 'Удалить';
    $deletePreloader.innerHTML = svgIcons.smallSpin;
    $cancelBtn.textContent = 'Отмена';

    $deleteBtn.addEventListener('click', () => {
      $deleteBtn.classList.add('is-active');

      onDelete(client.id, $modal);
    });

    $modalCloseBtn.addEventListener('click', () => {
      onClose($modal);
    });

    $cancelBtn.addEventListener('click', () => {
      $modalCloseBtn.click();
    });

    document.querySelector('.main__add-client-btn').disabled = true;

    $modal.append($modalContainer);
    $modalContainer.append($modalCloseBtn, $title, $text, $deleteBtn, $cancelBtn);
    $deleteBtn.append($deletePreloader);

    return $modal;
  }

  function getSortData(data, prop, dir) {
    data.sort((a, b) => {
      let itemA = a[prop];
      let itemB = b[prop];

      if (prop === 'fullName') {
        itemA = `${a['surname']} ${a['name']} ${a['lastName']}`.toLowerCase();
        itemB = `${b['surname']} ${b['name']} ${b['lastName']}`.toLowerCase();
      }

      if (dir) {
        if (itemA < itemB) return -1;
        else if (itemA > itemB) return 1;
        else return 0;
      } else {
        if (itemA > itemB) return -1;
        else if (itemA < itemB) return 1;
        else return 0;
      }
    });
  }

  function setActiveColumn(element) {
    const btnSortList = document.querySelectorAll('.table__th-btn');

    if (element) {
      columnSort = element.dataset.sort;

      btnSortList.forEach(btn => {
        const activeColumn = btn.classList.contains('is-active');
        const reverseColumn = btn.classList.contains('reverse');

        if (btn === element && reverseColumn) {
          btn.classList.remove('reverse');

          directionSort = true;
        } else if (btn === element && activeColumn) {
          btn.classList.add('reverse');

          directionSort = false;
        } else if (btn === element) {
          btn.classList.add('is-active');

          directionSort = true;
        } else {
          btn.classList.remove('is-active', 'reverse');
        }
      });
    } else {
      const tbody = document.querySelector('.table__tbody');

      btnSortList.forEach(btn => {
        btn.classList.remove('is-active', 'reverse');
      });

      if (tbody.childElementCount) {
        const btnSort = document.querySelector(`[data-sort='${columnSort}']`);

        btnSortList.forEach(btn => {
          btn.disabled = false;
        });

        btnSort.classList.add('is-active');

        if (!directionSort) {
          btnSort.classList.add('reverse');
        }
      } else {
        btnSortList.forEach(btn => {
          btn.disabled = true;
        });
      }
    }
  }

  function checkHighlighter(list) {
    let count = 0;

    list.forEach(item => {
      const containsHighlighted = item.classList.contains('highlighted');

      if (containsHighlighted) {
        highlighter = count;
      } else {
        count++;
      }
    });
  }

  function setHighlighted(list) {
    resetHighlighted(list);

    if (highlighter >= list.length) {
      highlighter = 0;
    } else if (highlighter < 0) {
      highlighter = list.length - 1;
    }

    list[highlighter].classList.add('highlighted');
  }

  function resetHighlighted(list) {
    list.forEach(item => {
      item.classList.remove('highlighted');
    });
  }

  function setHighlightedHover(list) {
    list.forEach(item => {
      item.addEventListener('mouseover', () => {
        resetHighlighted(list);

        item.classList.add('highlighted');
      });

      item.addEventListener('mouseout', () => {
        resetHighlighted(list);

        highlighter = -1;
      });
    });
  }

  function highlightClient(clientId) {
    const clientList = document.querySelector('.table__tbody');
    const currentClient = clientList.querySelector(`[data-id='${clientId}']`);

    resetHighlighted(clientList.childNodes);

    currentClient.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });

    currentClient.classList.add('highlighted');

    setTimeout(() => {
      currentClient.classList.remove('highlighted');
    }, 2000);
  }

  function overlayModal(modalElement) {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const modalOpen = modalElement.classList.contains('modal--is-open');

    if (modalOpen) {
      modalElement.classList.remove('modal--is-open');

      document.body.style.removeProperty('overflow');

      header.inert = false;
      main.inert = false;
    } else {
      setTimeout(() => {
        modalElement.classList.add('modal--is-open');
      }, 100);

      document.body.style.overflow = 'hidden';

      header.inert = true;
      main.inert = true;
    }
  }

  function checkValidation() {
    const modalInputList = document.querySelectorAll('.modal__input');
    const contactInputList = document.querySelectorAll('.modal__contact-input');

    let errorList = [];
    let incorrectContact = 0;
    let blankContact = 0;

    modalInputList.forEach(input => {
      if (input.value && (input.value.length < 2 || input.value.length > 25)) {
        input.classList.add('invalid');

        switch (input.getAttribute('name')) {
          case 'surname':
            errorList.push('Некорректная фамилия');

            break;
          case 'name':
            errorList.push('Некорректное имя');

            break;
          case 'lastName':
            errorList.push('Некорректное отчество');
        }
      } else if (!input.value && input.classList.contains('is-required')) {
        input.classList.add('invalid');

        switch (input.getAttribute('name')) {
          case 'surname':
            errorList.push('Введите фамилию');

            break;
          case 'name':
            errorList.push('Введите имя');
        }
      } else {
        input.classList.remove('invalid');
      }
    });

    contactInputList.forEach(input => {
      if (!input.value) {
        input.classList.add('invalid');

        blankContact++;
      } else if (input.value.length < 3 || input.value.length > 80) {
        input.classList.add('invalid');

        incorrectContact++;
      } else {
        input.classList.remove('invalid');
      }
    });

    if (incorrectContact === 1) {
      errorList.push('Некорректный контакт');
    } else if (incorrectContact) {
      errorList.push(`Некорректные контакты x${incorrectContact}`);
    }

    if (blankContact === 1) {
      errorList.push('Введите данные контакта');
    } else if (blankContact) {
      errorList.push(`Введите данные контактов x${blankContact}`);
    }

    return errorList;
  }

  function checkHash() {
    if (window.location.hash) {
      const clientId = window.location.hash.substring(1);

      getClient(clientId);
    }
  }

  function resetHash() {
    if (window.location.hash) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }

  const handlers = {
    async onSearch(searchParam, query) {
      if (query) {
        const param = searchParam[0];
        const response = await fetch(`http://localhost:3000/api/clients?search=${param}`);
        const clientsData = await response.json();

        searchData = clientsData.slice();
      }

      createSearchList(searchData, searchParam);
    },
    async onSave(formData, modalElement, clientId) {
      if (clientId) {
        const response = await fetch(`http://localhost:3000/api/clients/${clientId}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });

        setTimeout(() => {
          if (response.ok) {
            getClientsList(clientId);

            handlers.onClose(modalElement);
          }
        }, 500);
      } else {
        const clientId = 'new-client-id';
        const response = await fetch(`http://localhost:3000/api/clients`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });

        setTimeout(() => {
          if (response.ok) {
            getClientsList(clientId);

            handlers.onClose(modalElement);
          }
        }, 500);
      }
    },
    async onDelete(clientId, modalElement) {
      const clientElement = document.querySelector(`[data-id='${clientId}']`);;
      const response = await fetch(`http://localhost:3000/api/clients/${clientId}`, {
        method: 'DELETE',
      });

      setTimeout(() => {
        if (response.ok) {
          handlers.onClose(modalElement);

          clientElement.remove();

          localData.forEach(client => {
            if (client.id === clientId) {
              localData.splice(localData.indexOf(client), 1);
            }
          });

          if (!localData.length) {
            setActiveColumn();
          }
        }
      }, 500);
    },
    onClose(modalElement) {
      document.querySelector('.main__add-client-btn').disabled = false;

      overlayModal(modalElement);

      resetHash();

      searchData = [];

      setTimeout(() => {
        modalElement.remove();
      }, 200);
    },
  }

  async function getClientsList(clientId) {
    const response = await fetch(`http://localhost:3000/api/clients`);
    const clientsData = await response.json();
    const addClientBtn = document.querySelector('.main__add-client-btn');
    const tablePreloader = document.querySelector('.main__table-preloader');
    const tableError = document.querySelector('.main__table-error');

    tablePreloader.classList.add('is-active');

    addClientBtn.disabled = true;

    document.querySelectorAll('.table__th-btn').forEach(btn => {
      btn.disabled = true;
    });

    setTimeout(() => {
      if (response.ok) {
        if (!columnSort || !clientId) {
          columnSort = 'id';
          directionSort = true;
        }

        localData = clientsData.slice();

        createClientList(localData, columnSort, directionSort);

        setActiveColumn();

        addClientBtn.classList.remove('hidden');
        tablePreloader.classList.remove('is-active');

        addClientBtn.disabled = false;

        if (clientId === 'new-client-id') {
          const newClient = clientsData[clientsData.length - 1];

          highlightClient(newClient.id);
        } else if (clientId) {
          highlightClient(clientId);
        }
      } else {
        tablePreloader.classList.remove('is-active');
        tableError.classList.add('is-active');
      }
    }, 1000);
  }

  async function getClient(clientId) {
    const response = await fetch(`http://localhost:3000/api/clients/${clientId}`);
    const clientData = await response.json();

    setTimeout(() => {
      if (response.ok) {
        let modalElement;

        if (window.location.hash) {
          modalElement = createModalForm(clientData, handlers);

          document.querySelectorAll('.table__td-edit-btn').forEach(btn => {
            btn.classList.remove('is-active');
          });
        } else {
          modalElement = createModalDelete(clientData, handlers);

          document.querySelectorAll('.table__td-delete-btn').forEach(btn => {
            btn.classList.remove('is-active');
          });
        }

        document.body.prepend(modalElement);

        overlayModal(modalElement);

      } else {
        resetHash();

        getClientsList();
      }
    }, 500);
  }

  function render() {
    document.body.prepend(
      createHeader(handlers),
      createMain()
    );

    getClientsList();

    checkHash();

    window.addEventListener('hashchange', () => {
      checkHash();
    });

    document.addEventListener('click', e => {
      const targetSearchForm = e.target.closest('.header__search-form');
      const targetSearchItem = e.target.closest('.header__search-item');
      const targetModalContainer = e.target.closest('.modal__container');
      const targetContactDropdown = e.target.closest('.modal__contact-dropdown')

      const searchListWrap = document.querySelector('.header__search-list-wrap');
      const modal = document.querySelector('.modal');

      if (searchListWrap.classList.contains('is-active')) {
        const searchList = document.querySelector('.header__search-list');

        if (!targetSearchForm) {
          searchListWrap.classList.remove('is-active');

          searchList.innerHTML = '';
        }

        if (targetSearchItem) {
          const searchInput = document.querySelector('.header__search-input');
          const clientId = targetSearchItem.dataset.searchId;

          searchInput.value = targetSearchItem.children[0].textContent;

          searchListWrap.classList.remove('is-active');

          searchList.innerHTML = '';

          highlightClient(clientId);
        }
      }

      if (modal && !targetModalContainer) {
        if (modal.classList.contains('modal--is-open')) {
          handlers.onClose(modal);
        }
      }

      if (modal && !targetContactDropdown) {
        document.querySelectorAll('.modal__contact-dropdown').forEach(dropdown => {
          dropdown.classList.remove('is-active');
        });
      }
    });

    document.addEventListener('keydown', e => {
      const modal = document.querySelector('.modal');

      if (modal && e.key === 'Escape') {
        handlers.onClose(modal);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    render();
  });
})();
