


DB

test schema of each (prod, prod+feat, styles, related)

test GET result of each (prod, prod+feat, styles, related)


edge cases?



Server routes















need to get array of styles
  for each style

    style.photos = [];
    get corresponding photos (an array by id)
      add those photos into an array
      add this array to style obj with key of photos

    style.skus = {}
    get skus by style id
      for each sku add it into skus object
        sku: {'quantity': number, 'size': 'x'}



        {
          "product_id": "4",
          "results": [
              {
                "style_id": 18,
                "name": "Olive Green",
                "original_price": 65,
                "default": true,
                "photos": [],
                "skus": {
                  "79": {
                        "quantity": 8,
                        "size": "XS"
                  },
                  "80": {
                        "quantity": 16,
                        "size": "S"
                  },
                  "81": {
                        "quantity": 17,
                        "size": "M"
                  },
                  "82": {
                    "quantity": 10,
                    "size": "L"
                  },
                  "83": {
                    "quantity": 15,
                    "size": "XL"
                  },
                  "84": {
                    "quantity": 6,
                    "size": "XXL"
                  }
                  }
              },
              {
                  "style_id": 23,
                  "name": "Khaki",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "109": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "110": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "111": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "112": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "113": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "114": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 24,
                  "name": "Plaid",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "115": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "116": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "117": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "118": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "119": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "120": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 17,
                  "name": "Black",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "73": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "74": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "75": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "76": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "77": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "78": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 20,
                  "name": "Tan",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "91": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "92": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "93": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "94": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "95": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "96": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 21,
                  "name": "Red",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "97": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "98": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "99": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "100": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "101": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "102": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 19,
                  "name": "Grey",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "85": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "86": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "87": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "88": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "89": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "90": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 22,
                  "name": "Pinstripe",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "103": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "104": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "105": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "106": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "107": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "108": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              },
              {
                  "style_id": 25,
                  "name": "White",
                  "original_price": 65,
                  "default": true,
                  "photos": [],
                  "skus": {
                    "121": {
                      "quantity": 8,
                      "size": "XS"
                    },
                    "122": {
                      "quantity": 16,
                      "size": "S"
                    },
                    "123": {
                      "quantity": 17,
                      "size": "M"
                    },
                    "124": {
                      "quantity": 10,
                      "size": "L"
                    },
                    "125": {
                      "quantity": 15,
                      "size": "XL"
                    },
                    "126": {
                      "quantity": 6,
                      "size": "XXL"
                    }
                    }
              }
          ]
      }