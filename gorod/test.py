from copy import deepcopy
import pprint


def remove_non_terminal(grammar):
    not_existing_sym = search_not_existing_sym(grammar)
    new_grammar = deepcopy(grammar)
    toks = grammar['toks']
    vars = grammar['vars']
    new_vars = dict()

    for nonterminals, definitions in vars.items():
        if nonterminals in not_existing_sym:
            for rules in definitions:
                if check_token_for_rule(rules, toks, not_existing_sym):
                    if nonterminals in new_vars.keys():
                        new_vars[nonterminals].append(rules)
                    else:
                        new_vars[nonterminals] = list()
                        new_vars[nonterminals].append(rules)


def search_not_existing_sym(grammar):
    toks = grammar['toks']
    vars = grammar['vars']
    not_existing_sym = list()
    flag = True
    while flag:
        flag = False
        for nonterminals, definitions in vars.items():
            for rule in definitions:
                if check_token_for_rule(rule, toks, not_existing_sym):
                    if nonterminals not in not_existing_sym:
                        not_existing_sym.append(nonterminals)
                        flag = True
    return not_existing_sym


def check_token_for_rule(rule, tokens, _list):
    for partOfRule in rule:
        if partOfRule in tokens or partOfRule in _list:
            pass
        else:
            return False
    return True


grammar = {'toks': list(
    [(0, ' '),
     (11, 'aa'),
     (12, 'bb'),
     (21, 'ab'),
     (22, 'cc')]
),
    'vars': {
        'A': [['B', (11, 'aa')],
              ['D'],
              ['F', (12, 'bb')]],
        'B': [['B'],
              ['F', (21, 'ab')]],
        'C': [['C'],
              ['A', (22, 'cc')],
              ['F', (11, 'aa')]],
        'D': [[(0, ' ')]],
        'F': [
            ['B', (21, 'ab')],
            ['F', (12, 'bb')]]
    },
    'hvar': 'A',
}

remove_non_terminal(grammar)
pp = pprint.PrettyPrinter(indent=4)
pp.pprint(grammar)
