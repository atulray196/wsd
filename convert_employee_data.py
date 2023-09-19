import os
from lxml import etree

# Get the directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# File paths
xml_file = os.path.join(script_dir, 'employee_data.xml')
xsd_file = os.path.join(script_dir, 'employee_schema.xsd')
xslt_file = os.path.join(script_dir, 'employee_transform.xsl')
output_file = os.path.join(script_dir, 'employee_data.html')

# Validate XML against XSD
xmlschema_doc = etree.parse(xsd_file)
xmlschema = etree.XMLSchema(xmlschema_doc)
xml_doc = etree.parse(xml_file)

if xmlschema.validate(xml_doc):
    print("XML is valid against the schema.")
else:
    print("XML is not valid against the schema.")
    exit()

# Apply XSLT Transformation
xslt_doc = etree.parse(xslt_file)
transform = etree.XSLT(xslt_doc)
output_html = transform(xml_doc)

# Write HTML Output
with open(output_file, 'wb') as f:
    f.write(output_html)
    print(f"HTML output written to {output_file}")
